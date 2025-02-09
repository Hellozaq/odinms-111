/*
     名字：雷本礦山
     地图：發電廠保安隊
     描述：310050100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23033)).getStatus() == 1 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23034)).getStatus() == 1 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23035)).getStatus() == 1) {
        if (pi.getMap(931000200).getCharacters().size() < 1) {
            pi.getMap(931000200).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000200), pi.getMap(931000200).getPortal(1)); //3次轉職
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310050100));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "3次轉職目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24090)).getStatus() == 1) {
        var em = pi.getEventManager("q24090");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(pi.getPlayer());
            return false;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險的發電所目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "發電所禁止訪問"));
    return false;
}
