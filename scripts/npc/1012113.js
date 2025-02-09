/*
     名字：達爾米
     地图：捷徑
     描述：910010300
 */

function start() {
    cm.sendYesNo("很可惜！本來還打算問你要年糕的，可是本次月妙活動已結束了，要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.removeAll(4001453);
        cm.getPlayer().changeMap(cm.getMap(100000200), cm.getMap(100000200).getPortal(0));
    }
    cm.dispose();
}
