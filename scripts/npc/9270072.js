/*
     名字：小嘴
     地图：白色聖誕節之丘
     描述：555000000
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        var map = cm.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("CHRISTMAS"));
        if (map < 0)
            map = 230000000;

        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("CHRISTMAS"));
    }
    cm.dispose();
}
