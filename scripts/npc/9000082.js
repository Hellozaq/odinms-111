/*
     名字：風
     地图：神殿出口
     描述：950101100
 */

function start() {
    cm.sendYesNo("确定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = cm.getPlayer().getMap().getId() == 809061010 || cm.getPlayer().getMap().getId() == 809061100 ? 809060000 : 950100000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
