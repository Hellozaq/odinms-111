/*
     名字：砲台路
     地图：六條岔道
     描述：104020000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24079)).getStatus() != 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(105000000), pi.getMap(105000000).getPortal(6)); //奇幻村
        return true;
    }
    if (pi.getMap(910510400).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "飄飄的奇幻村目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(910510400).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910510400), pi.getMap(910510400).getPortal(1)); //飄飄的奇幻村
    pi.getPlayer().getMap().spawnNpc(1033225, new java.awt.Point(650, 236));
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(104020000));
    return true;
}
