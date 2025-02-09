/*
     名字：坍塌的石像
     地图：第5階段
     描述：910530200
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(105000000), cm.getMap(105000000).getPortal(0));
    cm.dispose();
}
