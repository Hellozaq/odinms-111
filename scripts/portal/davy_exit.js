/*
     名字：靈藥幻境
     地图：海盜船境地
     描述：251010404
 */

function enter(pi) {
    var map = pi.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    if (map < 0)
        map = 251010401; //金勾海賊團基地1

    portal = map == 251010401 ? 5 : pi.getMap(map).getPortal("unityPortal2") != null ? "unityPortal2" : pi.getMap(map).getPortal(3) != null ? 3 : 0;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(portal));
    pi.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    return true;
}
