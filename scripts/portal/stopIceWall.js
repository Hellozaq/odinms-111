/*
     名字：龍沉睡的島
     地图：寂靜的洞穴
     描述：914100020
 */

function enter(pi) {
    Packages.server.quest.MapleQuest.getInstance(22599).forceStart(pi.getPlayer(), 0, 2);
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getPlayer().getMap(), pi.getPlayer().getMap().getPortal(1));
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由于封印的保護，無法靠近亞普力耶"));
    return true;
}
