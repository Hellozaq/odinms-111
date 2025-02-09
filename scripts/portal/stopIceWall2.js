/*
     名字：龍沉睡的島
     地图：寂靜的洞穴
     描述：914100022
 */

function enter(pi) {
    pi.getPlayer().checkFollow();
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.instantMapWarp(pi.getPlayer().getMap().getPortal(1).getId()));
    pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal(1).getPosition()));
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由于封印的保護，無法靠近亞普力耶"));
    return true;
}
