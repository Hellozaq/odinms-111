/*
     名字：鮑伯
     地图：引擎室
     描述：541010100
 */

function start() {
    cm.sendYesNo("确定要离开#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(541010110), cm.getMap(541010110).getPortal(0));
    cm.dispose();
}
