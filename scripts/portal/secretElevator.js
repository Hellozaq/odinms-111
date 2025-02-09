/*
     名字：水泥路
     地图：埃德爾斯坦散步路道3
     描述：310030200
 */

function enter(pi) {
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(310030210), pi.getMap(310030210).getPortal(0)); //秘密通道
    pi.getPlayer().startMapTimeLimitTask(60, pi.getMap(310060120));
    return true;
}
