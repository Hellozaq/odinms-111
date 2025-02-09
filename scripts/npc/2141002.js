/*
     名字：被遺忘的神殿管理人
     地图：神祇的黃昏
     描述：270050100
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(270050000), cm.getMap(270050000).getPortal(0));
    cm.dispose();
}
