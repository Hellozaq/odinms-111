/*
     名字：水泥路
     地图：埃德爾斯坦公園2
     描述：310020100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23210)).getStatus() == 1) {
        var em = pi.getEventManager("Mastema");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(pi.getPlayer());
            return false;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "艾德斯塔公園噴水台附近1目前擁擠，請稍後再試"));
        return false;
    }
    if ((pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23210)).getStatus() > 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23211)).getStatus() < 2) || (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23213)).getStatus() > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23214)).getStatus() < 2)) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931050110), pi.getMap(931050110).getPortal(1)); //艾德斯塔公園噴水台附近2
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "艾德斯塔公園噴水台附近只適用於惡魔殺手相關任務"));
    return false;
}
