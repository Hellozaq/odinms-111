/*
     名字：過去的神木村
     地图：燃燒的神木村3
     描述：272000300
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31171)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(272000310), pi.getMap(272000310).getPortal(1)); //燃燒的廢墟
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "狂狼勇士需要你的幫助"));
    return false;
}
