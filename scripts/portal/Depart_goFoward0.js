/*
     名字：福爾摩沙
     地图：7層8層 B區域
     描述：103040410
 */

function enter(pi) {

    var map = pi.getPlayer().getMap().getId() + 10;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(1));
    return true;
}
