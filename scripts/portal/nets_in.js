/*
     名字：日落之路
     地图：薩赫勒地區3
     描述：260020500
 */

function enter(pi) {
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926010000), pi.getMap(926010000).getPortal(4)); //金字塔山丘
    return true;
}
