/*
     名字：樹根水晶
     地图：闇黑龍王洞穴入口
     描述：240050400
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(240050000), cm.getMap(240050000).getPortal(0));
    cm.dispose();
}
