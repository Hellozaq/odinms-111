/*
     名字：玩具城
     地图：遺忘的迴廊
     描述：220070400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20749)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(922000030).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "區域目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(922000030).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(922000030), pi.getMap(922000030).getPortal(1));
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(220070400));
    return true;
}
