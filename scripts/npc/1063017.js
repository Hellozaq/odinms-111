/*
     名字：長相奇怪的石像
     地图：傀儡師秘密通路
     描述：910510100
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            cm.sendNext("歡迎回來，普蘭西斯主人，要進入您的洞穴嗎？");
            break;
        case 1:
            cm.sendPrev("請慢走，普蘭西斯主人。");
            break;
        case 2:
            if (cm.getMap(910510202).getCharacters().size() < 1) {
                cm.getMap(910510202).resetFully();
                cm.getPlayer().changeMap(cm.getMap(910510202), cm.getMap(910510202).getPortal(0));
                cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300346), new java.awt.Point(205, 257));
                cm.getPlayer().startMapTimeLimitTask(600, cm.getMap(910510100));
                cm.dispose();
                return;
            }
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "傀儡師的洞穴目前擁擠，請稍後再試"));
            cm.dispose();
    }
}
