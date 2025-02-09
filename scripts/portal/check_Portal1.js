/*
     名字：過去的神木村
     地图：燃燒的神木村2
     描述：272000200
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31169)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(272000300), pi.getMap(272000300).getPortal(1)); //燃燒的神木村3
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "雪麗受傷了，需要儘快幫助她"));
    return false;
}
