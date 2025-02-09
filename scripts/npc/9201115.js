/*
     名字：戰爭神像
     地图：大師議會大廳
     描述：610030600
 */

function start() {
    if (cm.getPlayer().getMap().getReactorByName("mob1").getState() == 0) {
        cm.sendNext("歡迎來到大師議會大廳，我將成為你今晚的主人…哦……hahaha。");
    }
    if (cm.getPlayer().getMap().getReactorByName("mob1").getState() == 1) {
        if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
            cm.sendOk("哈哈哈……你們可以去和我的守護者們打個招呼吧……哈哈哈…");
            cm.dispose();
            return;
        }
        cm.sendNext("呃！！！！我可愛的守衛者呢？你們居然敢做出這樣無禮的事情，不可原諒。");
    }
    if (cm.getPlayer().getMap().getReactorByName("mob1").getState() == 2) {
        if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
            cm.sendOk("哈哈哈……守護者的大師們正在欢迎你们的到来……哈哈哈…！！");
            cm.dispose();
            return;
        }
        cm.sendNext("什麼？啊……這不可能發生，你們居然戰勝了守護者的大師們，不！！！");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode > 0)
        if (cm.getPlayer().getMap().getReactorByName("mob1").getState() == 0) {
            cm.sendNext("我正在為你們的到來準備盛大的歡迎典禮…哦……想想都興奮…hahaha。");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請注意！！！守護者的軍團已經來了"));

            for (var i = 0; i < 15; i++)
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400594), new java.awt.Point(-872 + (Math.random() * 2000), 276));
            for (var i = 0; i < 15; i++)
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400582), new java.awt.Point(-872 + (Math.random() * 2000), 276));
            cm.getPlayer().getMap().getReactorByName("mob1").forceHitReactor(1);
            cm.dispose();
            return;
        }
    if (cm.getPlayer().getMap().getReactorByName("mob1").getState() == 1) {
        cm.sendNext("接下來，為你們引薦一些守護者的大師們，哦……hahaha。");
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請注意！！！守護者的大師們已經來了"));

        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400589), new java.awt.Point(-391, 276));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400590), new java.awt.Point(-291, 276));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400591), new java.awt.Point(-117, 276));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400592), new java.awt.Point(75, 276));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400593), new java.awt.Point(233, 276));

        cm.getPlayer().getMap().getReactorByName("mob1").forceHitReactor(2);
    }
    cm.dispose();
}
