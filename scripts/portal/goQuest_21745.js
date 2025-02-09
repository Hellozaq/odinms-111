/*
     名字：武陵道場
     地图：武陵道場入口
     描述：925020001
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21745)).getStatus() == 1) {
        if (pi.getMap(925041001).getCharacters().size() < 1) {
            pi.getMap(925041001).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(925041001), pi.getMap(925041001).getPortal(1)); //深山人蔘山丘
            pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(925020001));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "深山人蔘山丘目前擁擠，請稍後再試"));
    }
    return false;
}
