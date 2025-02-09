/*
     名字：弓箭手村
     地图：弓箭手培訓中心
     描述：100000201
 */

function enter(pi) {

    var em = pi.getEventManager("q24071");
    var prop = em.getProperty("state");
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24071)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24095)).getCustomData() != 1) {
        if (prop == null || prop == 0) {
            em.startInstance(pi.getPlayer());
            return false;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "受到攻擊的弓箭手村右側目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100000000), pi.getMap(100000000).getPortal(14));
    return true;
}
