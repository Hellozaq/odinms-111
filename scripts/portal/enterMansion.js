/*
     名字：黑色翅膀佔領地
     地图：埃德爾斯坦
     描述：310000000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23925)).getStatus() == 1) {
        if (pi.getMap(931010010).getCharacters().size() < 1) {
            pi.getMap(931010010).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931010010), pi.getMap(931010010).getPortal(1)); //戒備深嚴的住宅
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310000000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "戒備深嚴的住宅目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(310000004), pi.getMap(310000004).getPortal(1)); //住宅
    return true;
}
