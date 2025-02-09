/*
     名字：雷本礦山
     地图：發電廠大廳
     描述：310050000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24088)).getStatus() == 1) {
        if (pi.getMap(931040000).getCharacters().size() < 1) {
            pi.getMap(931040000).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931040000), pi.getMap(931040000).getPortal(1)); //人偶師房間
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310050000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "人偶師房間目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23268)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931050220), pi.getMap(931050220).getPortal(1)); //普蘭西斯的房間
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23954)).getStatus() == 1) {
        if (pi.getMap(931020010).getCharacters().size() < 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931020010), pi.getMap(931020010).getPortal(1)); //普蘭西斯的房間
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310050000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "普蘭西斯的房間目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "傀儡師普蘭西斯的房間"));
    return false;
}
