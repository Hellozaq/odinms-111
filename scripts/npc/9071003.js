/*
     名字：怪物公園公車
     地图：怪物公園
     描述：951000000
 */

function start() {
    map = cm.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("MONSTER_PARK"));
    if (map < 0)
        map = 100000000;
    cm.sendYesNo(cm.getPlayer().getMap().getId() == 951000000 ? "你好。怪物公园客车竭诚为大家提供最好的服务。你想回到村\r\n里去吗？" : "欢迎光临，顾客。确认前往总是充满新鲜愉悦的休彼德蔓怪物\r\n公园吗？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMap().getId() != 951000000) {
            cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MONSTER_PARK"));
            cm.getPlayer().changeMap(cm.getMap(951000000), cm.getMap(951000000).getPortal(0));
            cm.dispose();
            return;
        }
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("MONSTER_PARK"));
    } else { // 如果选择否
        if (cm.getPlayer().getMap().getId() == 951000000) {
            cm.sendNext("离开怪物公园时，请使用我，我会一直将你安全送达目的地。");
        } else {
            cm.sendNext("你随时可以使用，如果你改变了主意，请告诉我。");
        }
    }
    cm.dispose();
}
