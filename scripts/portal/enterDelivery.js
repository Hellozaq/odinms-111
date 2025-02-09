/*
     名字：水泥路
     地图：出現蛇的路
     描述：310030110
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931000430), pi.getMap(931000430).getPortal(1)); //私會場所
    return true;
}
