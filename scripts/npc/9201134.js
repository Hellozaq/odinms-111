/*
     名字：Aldpl
     地图：夢幻主題公園
     描述：551030200
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(551030100), cm.getMap(551030100).getPortal(0));
    cm.dispose();
}
