/*
     名字：???
     地图：面臨危險的弓箭手教育園
     描述：910050000
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
            cm.sendNext("嗯…就像紳士說的一樣，你這傢伙，果然追到這裡來了？我倒是無所謂啦，需要的情報已經到手了……");
            break;
        case 1:
            cm.sendPrev("來都來了，只要可以除掉黑色翅膀的妨礙者，就是一石二鳥了，呵呵……出招吧！！");
            break;
        case 2:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300355), new java.awt.Point(-200, 181));
            cm.dispose();
    }
}
