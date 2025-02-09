/*
     名字：福爾摩沙
     地图：7層8層 B區域
     描述：103040410
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getId() != 103040420) {
        var map = pi.getPlayer().getMap().getId() + 10;
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(2));
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2288)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於場地裝修，限制訪問7層8層 D區域"));
        return false;
    }
    if (pi.getMap(103040430).getCharacters().size() != 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "7層8層 D區域目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(103040430).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103040430), pi.getMap(103040430).getPortal(1)); //7層8層 D區域
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(103040420));
    return true;
}
