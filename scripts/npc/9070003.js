/*
     名字：馬西姆斯
     地图：戰鬥廣場
     描述：960000000
 */

function start() {
    cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        var map = cm.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("BATTLESQUARE"));
        if (map < 0)
            map = 100000000;

        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("BATTLESQUARE"));
    }
    cm.dispose();
}
