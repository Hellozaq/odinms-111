/*
     名字：皇后之路
     地图：耶雷弗
     描述：130000000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20754)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(913060000), pi.getMap(913060000).getPortal(2)); //精靈之地
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "精靈之地只適用於採集精靈之光的騎士"));
    return false;
}
