/*
     名字：納希競技大會
     地图：競技場等待室
     描述：980010000
 */

function enter(pi) {

    var map = pi.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    if (map < 0)
        map = 100000000;

    portal = pi.getMap(map).getPortal("unityPortal2") != null ? "unityPortal2" : pi.getMap(map).getPortal(3) != null ? 3 : 0;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(portal));
    pi.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    return true;
}
