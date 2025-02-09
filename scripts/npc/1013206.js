/*
     名字：伊培賀
     地图：青蛙嘴的家
     描述：922030001
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
            if (status == 1) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendNext("沒想到你能找到這裡來，看你的表情……好像很生氣的樣子。");
            break;
        case 1:
            cm.sendNextPrevS("你一直的騙我？！不可原諒！");
            break;
        case 2:
            cm.sendNextPrev("騙你？不，那只是你的錯覺罷了……呵呵，多虧了你，為我解決了不少麻煩。但是現在我不需要你了。你已經成為我的障礙。");
            break;
        case 3:
            cm.sendNextPrev("我得讓你從這裡消失。");
            break;
        case 4:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300393), new java.awt.Point(196, -21));
            cm.dispose();
    }
}
