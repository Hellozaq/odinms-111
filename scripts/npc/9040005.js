/*
     名字：回傳之石
     地图：守護之峽谷
     描述：990000100
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k，退出公會任務嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(990001100), cm.getMap(990001100).getPortal(0));
    cm.dispose();
}
