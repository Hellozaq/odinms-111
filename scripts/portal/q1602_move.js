/*
     名字：隱藏地圖
     地图：維修中的列車
     描述：931050400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1602)).getStatus() != 1 || (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1602)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1602)).getMobKills(9300488) > 0)) {
        return false;
    }
    if (pi.getMap(931050402).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "空蕩蕩的站台目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(931050402).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931050402), pi.getMap(931050402).getPortal(1)); //空蕩蕩的站台
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(931050400));
    return true;
}
