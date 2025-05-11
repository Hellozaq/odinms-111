package server;

import client.SkillFactory;
import client.inventory.MapleInventoryIdentifier;
import constants.QuickMove;
import constants.ServerConstants;
import static constants.ServerConstants.TIMEZONE;
import database.DatabaseBackup;
import database.DatabaseConnection;
import handling.MapleServerHandler;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.channel.MapleGuildRanking;
import handling.login.LoginInformationProvider;
import handling.login.LoginServer;
import handling.world.World;
import handling.world.family.MapleFamily;
import handling.world.guild.MapleGuild;
import server.Timer.*;
import server.events.MapleOxQuizFactory;
import server.life.*;
import server.quest.MapleQuest;
import tools.HairAndEye;
import java.sql.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class Start {

    public static long startTime = System.currentTimeMillis();
    public static final Start instance = new Start();
    public static AtomicInteger CompletedLoadingThreads = new AtomicInteger(0);

    public void run() throws InterruptedException {
        System.setProperty("net.sf.odinms.wzpath", "wz");
        System.setProperty("polyglot.js.nashorn-compat", "true");
        System.out.println("初始化系统设定...");
        clean();

        ServerConstants.loadSetting();
        resetLoginStatus();

        DatabaseBackup.getInstance().startTasking();
        World.init();

        startTimers();

        System.out.println("开始并行加载模块.");

        ExecutorService executor = Executors.newFixedThreadPool(10);
        List<Runnable> tasks = Arrays.asList(
                () -> logTime("MapleGuildRanking", MapleGuildRanking.getInstance()::load),
                () -> logTime("MapleGuild", MapleGuild::loadAll),
                () -> logTime("MapleFamily", MapleFamily::loadAll),
                () -> logTime("MapleLifeFactory", MapleLifeFactory::loadQuestCounts),
                () -> logTime("MapleQuest", MapleQuest::initQuests),
                () -> logTime("HairAndEye", HairAndEye::Load),
                () -> {
                    MapleItemInformationProvider iip = MapleItemInformationProvider.getInstance();
                    logTime("runEtc", iip::runEtc);
                    logTime("runItems", iip::runItems);
                },
                () -> logTime("MapleMonsterInformationProvider", MapleMonsterInformationProvider.getInstance()::load),
                () -> logTime("SkillFactory", SkillFactory::load),
                () -> logTime("LoginInformationProvider", LoginInformationProvider::getInstance),
                () -> logTime("RandomRewards", RandomRewards::load),
                () -> logTime("MapleOxQuizFactory", MapleOxQuizFactory::getInstance),
                () -> logTime("MapleCarnivalFactory", MapleCarnivalFactory::getInstance),
                () -> logTime("MobSkillFactory", MobSkillFactory::getInstance),
                () -> logTime("SpeedRunner", SpeedRunner::loadSpeedRuns),
                () -> logTime("MTSStorage", MTSStorage::load),
                () -> logTime("MapleInventoryIdentifier", MapleInventoryIdentifier::getInstance),
                () -> logTime("CashItemFactory", CashItemFactory.getInstance()::initialize),
                () -> logTime("PlayerNPC", PlayerNPC::loadAll)
        );

        CountDownLatch latch = new CountDownLatch(tasks.size());
        for (Runnable task : tasks) {
            executor.submit(() -> {
                try {
                    task.run();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    latch.countDown();
                }
            });
        }

//        latch.await();
//        executor.shutdown();
//        System.out.println("加载网络服务和服务器核心...");
//        MapleServerHandler.initiate();
//        LoginServer.run_startup_configurations();
//        ChannelServer.startChannel_Main();
//        CashShopServer.run_startup_configurations();
        
        System.out.println("加载网络服务和服务器核心...");

        ExecutorService serviceExecutor = Executors.newFixedThreadPool(4);
        CountDownLatch netLatch = new CountDownLatch(4);

        Runnable[] networkTasks = new Runnable[]{
            () -> {
                try {
                    MapleServerHandler.initiate();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    netLatch.countDown();
                }
            },
            () -> {
                try {
                    LoginServer.run_startup_configurations();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    netLatch.countDown();
                }
            },
            () -> {
                try {
                    ChannelServer.startChannel_Main();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    netLatch.countDown();
                }
            },
            () -> {
                try {
                    CashShopServer.run_startup_configurations();
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    netLatch.countDown();
                }
            }
        };

        for (Runnable r : networkTasks) {
            serviceExecutor.submit(r);
        }

        netLatch.await();
        serviceExecutor.shutdown();

        System.out.println("注册任务/监控...");
        CheatTimer.getInstance().register(AutobanManager.getInstance(), 60000);
        Runtime.getRuntime().addShutdownHook(new Thread(new Shutdown()));
        World.registerRespawn();
        ShutdownServer.registerMBean();

        MapleMonsterInformationProvider.getInstance().addExtra();
        LoginServer.setOn();
        QuickMove.QuickMoveLoad();
        TimeZone.setDefault(TimeZone.getTimeZone(TIMEZONE));

        System.out.println("枫之谷世界启动成功：< 花费时间 " + ((System.currentTimeMillis() - startTime) / 1000) + " 秒 >");
        RankingWorker.run();
    }

    private void startTimers() {
        WorldTimer.getInstance().start();
        EtcTimer.getInstance().start();
        MapTimer.getInstance().start();
        CloneTimer.getInstance().start();
        EventTimer.getInstance().start();
        BuffTimer.getInstance().start();
        PingTimer.getInstance().start();
    }

    private void resetLoginStatus() {
        try (Connection con = DatabaseConnection.getConnection(); PreparedStatement ps = con.prepareStatement("UPDATE accounts SET loggedin = 0")) {
            ps.executeUpdate();
            System.out.println("重置登录状态完成.");
        } catch (SQLException ex) {
            throw new RuntimeException("[错误] 注销所有账户时出现问题。", ex);
        }
    }

    private void logTime(String name, Runnable task) {
        long t = System.currentTimeMillis();
        task.run();
        //System.out.println("" + name + " 加载完成 (" + (System.currentTimeMillis() - t) + " ms)");
    }

    public static class Shutdown implements Runnable {

        @Override
        public void run() {
            ShutdownServer.getInstance().run();
        }
    }

    public void clean() {
        try (Connection con = DatabaseConnection.getConnection(); PreparedStatement ps = con.prepareStatement("SELECT * FROM acheck WHERE day = 1"); ResultSet rs = ps.executeQuery()) {

            Calendar ocal = Calendar.getInstance();
            String today = ocal.get(Calendar.YEAR) + "" + (ocal.get(Calendar.MONTH) + 1) + "" + ocal.get(Calendar.DAY_OF_MONTH);
            int count = 0;

            while (rs.next()) {
                String key = rs.getString("keya");
                String[] da = key.split("_");
                if (!da[0].equals(today)) {
                    try (PreparedStatement del = con.prepareStatement("DELETE FROM acheck WHERE keya = ?")) {
                        del.setString(1, key);
                        del.executeUpdate();
                        count++;
                    }
                }
            }
            System.out.println("清理过期 acheck 记录：" + count);
        } catch (SQLException e) {
            System.err.println("清理 acheck 资料时发生错误：" + e.getMessage());
        }
    }

    public static void main(final String args[]) throws InterruptedException {
        instance.run();
    }
}
