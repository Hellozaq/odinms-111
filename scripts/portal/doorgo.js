/*
     名字：隱藏地圖
     地图：階段 5 - 心跳不規則
     描述：670010600
 */

function enter(pi) {
    var name = pi.getPortal().getName().substring(2, 4);
    var gate = pi.getPlayer().getMap().getReactorByName("gate" + name);
    if (gate != null && gate.getState() == 4) {
        pi.getPlayer().checkFollow();
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.instantMapWarp(pi.getPlayer().getMap().getPortal("gt" + name + "PIA").getId()));
        pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal("gt" + name + "PIA").getPosition()));
        //pi.playPortalSE();pi.getPlayer().changeMap(pi.getMap(670010600), pi.getMap(670010600).getPortal("gt" + name + "PIB")); //常規傳送
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "大門尚未打開"));
    return false;
}
