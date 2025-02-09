/*
     名字：菇菇歌唱森林
     地图：幽靈菇菇森林
     描述：100020400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24061)).getStatus() == 1 && pi.getPlayer().itemQuantity(4032965) && !pi.getPlayer().itemQuantity(4032966)) {
        if (pi.getMap(913002000).getCharacters().size() > 0) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "費洛蒙殭屍菇菇王森林目前擁擠，請稍後再試"));
            return false;
        }
        pi.getMap(910080020).resetFully();
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(910080020), pi.getMap(910080020).getPortal(1)); //費洛蒙殭屍菇菇王森林
        pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(100020400));
        return true;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(100020401), pi.getMap(100020401).getPortal(1)); //殭屍菇菇王的山丘
    return true;
}
