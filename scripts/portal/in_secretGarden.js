/*
     名字：騎士團要塞
     地图：騎士團第4區域
     描述：271030400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31146)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "秘密庭院內戒備森嚴，無法訪問"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(271030410), pi.getMap(271030410).getPortal(1)); //秘密庭院
    return true;
}
