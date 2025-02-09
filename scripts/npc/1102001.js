/*
     名字：奇理科
     地图：第 2 練武場
     描述：913001000
 */

function start() {
    cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(130020000), cm.getMap(130020000).getPortal(12));
    cm.dispose();
}
