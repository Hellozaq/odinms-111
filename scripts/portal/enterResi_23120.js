/*
     名字：黑色翅膀佔領地
     地图：埃德爾斯坦
     描述：310000000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23120)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(931000410).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "修亞勒的水倉庫目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(931000410).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931000410), pi.getMap(931000410).getPortal(1)); //修亞勒的水倉庫
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(310000000));
    return true;
}
