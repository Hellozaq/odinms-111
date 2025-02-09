/*
     名字：莫斯提馬
     地图：時間通道
     描述：220050300
 */

function start() {
    if ((cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23215)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23215)).getMobKills(9001041) > 0) || (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23219)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23219)).getMobKills(9001042) > 0))
        cm.sendYesNo("太好了，我们先返回#m310010000#在谈。");
    else
        cm.sendYesNo("你來啦~~讓我打開時間縫隙，把你送回過去。過去的你真的很強，必須做好充分的準備。現在進入嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if ((cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23215)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23215)).getMobKills(9001041) > 0) || (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23219)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23219)).getMobKills(9001042) > 0)) {
            cm.getPlayer().changeMap(cm.getMap(310010000), cm.getMap(310010000).getPortal(1));
            cm.dispose();
            return;
        }
        if (cm.getMap(927000100).getCharacters().size() > 0) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "過去的時間神殿1目前擁擠，請稍後再試"));
            cm.dispose();
            return;
        }
        cm.getMap(927000100).resetFully();
        cm.getPlayer().changeMap(cm.getMap(927000100), cm.getMap(927000100).getPortal(1));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23215)).getStatus() == 1 ? 9001041 : 9001042), new java.awt.Point(300, 44));
        cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(220050300));
    }
    cm.dispose();
}
