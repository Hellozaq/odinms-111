/*
     名字：馬來西亞
     地图：都會潮流區
     描述：550000000
 */

function enter(pi) {
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910000000), pi.getMap(910000000).getPortal(34));
    return true;
}
