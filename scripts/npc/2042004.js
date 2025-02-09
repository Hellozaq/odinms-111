/*
     名字：助手布魯
     地图：擂台賽場地2&amp;lt;等待室&gt;
     描述：980000200
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(980000000), cm.getMap(980000000).getPortal(0));
    cm.dispose();
}
