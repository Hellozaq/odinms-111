/*
     名字：維多利亞
     地图：秘密花園上層
     描述：103050100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2363)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "珠子之房只適用于接受雪姬考驗的下忍"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910350000), pi.getMap(910350000).getPortal(3)); //珠子之房
    return true;
}
