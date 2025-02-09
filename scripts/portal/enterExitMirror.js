/*
     名字：黃金寺廟
     地图：黃金寺廟
     描述：809060000
 */

function enter(pi) {
    var map = pi.getPlayer().getMap().getId() == 809060000 ? 950100000 : 809060000;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(10));
    return true;
}
