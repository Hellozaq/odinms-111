/*
     名字：弓箭手村
     地图：弓箭手村
     描述：100000000
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1503)).getStatus() > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1504)).getStatus() < 2) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(910090000), pi.getMap(910090000).getPortal(2)); //赫麗娜的弓箭手教育園
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21753)).getStatus() > 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21754)).getStatus() < 2) {
        if (pi.getMap(910050000).getCharacters().size() < 1) {
            pi.getMap(910050000).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(910050000), pi.getMap(910050000).getPortal(1)); //面臨危險的弓箭手教育園
            pi.getPlayer().getMap().spawnNpc(1204031, new java.awt.Point(-270, 181));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(100000000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "面臨危險的弓箭手教育園目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100000201), pi.getMap(100000201).getPortal(10));
    return true;
}
