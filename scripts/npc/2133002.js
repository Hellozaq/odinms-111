/*
     名字：艾靈森林里程碑
     地图：濃霧森林
     描述：930000300
 */

function start() {
    cm.sendYesNo("你確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(930000800), cm.getMap(930000800).getPortal(0));
    cm.dispose();
}
