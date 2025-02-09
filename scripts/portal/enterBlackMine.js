/*
     名字：乾枯的路
     地图：去礦山的路2
     描述：310040100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23143)).getStatus() > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23149)).getStatus() < 1) {
        if (pi.getMap(931000620).getCharacters().size() < 1) {
            pi.getMap(931000620).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000620), pi.getMap(931000620).getPortal(1)); //礦山入口
            return false;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "礦山入口目前擁擠，請稍後再試"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(310040200), pi.getMap(310040200).getPortal(3)); //礦山入口
    return true;
}
