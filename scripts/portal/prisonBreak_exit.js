/*
     名字：隱藏地圖
     地图：隱藏之塔入口&amp;lt;離開地圖&gt;
     描述：921160000
 */

function enter(pi) {
    var map = pi.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    if (map < 0)
        map = 211000000; //冰原雪域

    portal = pi.getMap(map).getPortal("unityPortal2") != null ? "unityPortal2" : pi.getMap(map).getPortal(3) != null ? 3 : 0;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(portal));
    pi.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
    return true;
}
