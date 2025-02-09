/*
     名字：乾枯的路
     地图：礦山入口
     描述：310040200
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22611)).getStatus() != 1) {
        pi.openNpc(2153002);
        return true;
    }
    var em = pi.getEventManager("BlackWing");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        em.startInstance(pi.getPlayer());
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "發電廠大廳目前擁擠，請稍後再試"));
    return false;
}
