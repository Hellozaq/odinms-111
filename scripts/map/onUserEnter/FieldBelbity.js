/*
     名字：埃德爾斯坦
     地图：礦山入口
     描述：931000620
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            ms.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            ms.getPlayer().getMap().spawnNpc(2159347, new java.awt.Point(2051, 28));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 2));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 8000));
            break;
        case 1:
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 0));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(1, 1000));
            break;
        case 2:
            ms.sendNextS("斐勒！", 17);
            break;
        case 3:
            ms.sendNextPrevS("………", 5, 2159347);
            break;
        case 4:
            ms.sendNextPrevS("斐勒！你去哪兒？站住！黑色翅膀不是你的敵人嗎？！", 17);
            break;
        case 5:
            ms.sendNextPrevS("黑色翅膀的敵人……？消滅……敵人……", 5, 2159347);
            break;
        case 6:
            for (var i = 0; i < 10; i++)
                ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300495), new java.awt.Point(1000 + (Math.random() * 1000), 28));
            for (var i = 0; i < 3; i++)
                ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300495), new java.awt.Point(700 + (Math.random() * 300), -272));
            ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300496), new java.awt.Point(1863, 28));
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
            ms.getPlayer().startMapTimeLimitTask(600, ms.getMap(310040100));
            ms.dispose();
    }
}
