/*
     名字：武陵桃園
     地图：靈藥幻境
     描述：251000000
 */

function enter(pi) {
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910000000), pi.getMap(910000000).getPortal(34));
    return true;
}
