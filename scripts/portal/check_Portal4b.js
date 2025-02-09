/*
     名字：過去的神木村
     地图：燃燒的神木村4
     描述：272000410
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，出口已關閉"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31176)).getStatus() < 2) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "凱雷特出現在這裡，是發生了什麼事情嗎"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272000500), pi.getMap(272000500).getPortal(1)); //燃燒的神木村5
    return true;
}
