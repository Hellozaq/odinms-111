/*
     名字：塔古斯
     地图：被封印的庭園
     描述：920030001
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
            cm.sendNext("嗯？怎么回事，你？");
            break;
        case 1:
            cm.sendNextPrev("前不久倒是听说维多利亚岛上的傀儡师被人打倒了，难道是你......");
            break;
        case 2:
            cm.sendPrev("嘿嘿，那反倒好办了，既拿到了天空之城的封印石，又能顺便打倒你的话，我就能在傀儡师之上了！出招吧！");
            break;
        case 3:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300348), new java.awt.Point(625, 83));
            cm.dispose();
    }
}
