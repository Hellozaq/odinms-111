/*
     名字：新加坡
     地图：中心商務區
     描述：540000000
 */

function enter(pi) {
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910000000), pi.getMap(910000000).getPortal(34));
    return true;
}
