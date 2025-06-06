/*
     名字：隱藏地圖
     地图：研究室103號
     描述：926100303
 */

function enter(pi) {
    x = pi.getPortal().getName();
    eim = pi.getPlayer().getEventInstance();
    for (var i = 0; i < 5; i++) {
        if (eim.getProperty(i + "st") == null) {
            eim.setProperty(i + "st", ("pt" + i) + Math.floor(Math.random() * 4));
        }
        if (eim.getProperty(i + "st") == x) {
            pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.instantMapWarp(pi.getPlayer().getMap().getPortal(eim.getProperty("4st") == x ? "np09" : "np0" + pi.getPortal().getName().substring(2, 3)).getId()));
            pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal(eim.getProperty("4st") == x ? "np09" : "np0" + pi.getPortal().getName().substring(2, 3)).getPosition()));
            pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("an" + pi.getPortal().getName().substring(2, 4), 2));
            return true;
        }
    }
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.instantMapWarp(pi.getPlayer().getMap().getPortal("npFail").getId()));
    pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal("npFail").getPosition()));
    return true;
}
