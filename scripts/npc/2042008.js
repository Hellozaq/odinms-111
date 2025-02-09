/*
     名字：助手雷德
     地图：擂台賽場地1&amp;lt;等待室&gt;
     描述：980031000
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(980030000), cm.getMap(980030000).getPortal(4));
    cm.dispose();
}
