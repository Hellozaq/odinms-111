/*
     名字：路德斯湖
     地图：地球防衛本部
     描述：221000000
 */

function enter(pi) {
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910000000), pi.getMap(910000000).getPortal(34));
    return true;
}
