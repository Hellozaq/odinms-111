/*
     名字：天空之城
     地图：散步路Ⅱ
     描述：200060000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21739)).getStatus() != 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(200060001), pi.getMap(200060001).getPortal(2)); //人少的散步道
        return true;
    }
    var em = pi.getEventManager("SealStone");
    var prop = em.getProperty("state");
    if (prop == null || prop == 0) {
        em.startInstance(pi.getPlayer());
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "人少的散步道目前擁擠，請稍後再試"));
    return false;
}
