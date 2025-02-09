/*
     名字：路易士
     地图：第1階段
     描述：910130000
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(101000000), cm.getMap(101000000).getPortal(0));
    cm.dispose();
}
