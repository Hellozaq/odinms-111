/*
     名字：精靈豎琴
     地图：國王休息處
     描述：101050010
 */

function start() {
    if (cm.getPlayer().getJob() >= 2300 && cm.getPlayer().getJob() < 2400) {
        cm.getPlayer().changeMap(cm.getMap(910150100), cm.getMap(910150100).getPortal(1));
    }
    cm.dispose();
}
