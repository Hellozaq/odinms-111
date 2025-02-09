/*
     名字：奇勒斯坦
     地图：神祇的黃昏
     描述：270050100
 */

function start() {
    cm.sendAcceptDecline("只有擁有善良的鏡子，才能召喚黑魔法師。等等！！有些不對勁，為什麼黑魔法師沒有被召喚出來？這是什麼力量？我感覺...#b這和黑魔法師完全不一樣#k......Ahhhhh！");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
        cm.forceStartReactor(270050100, 2709000);
    }
    cm.dispose();
}
