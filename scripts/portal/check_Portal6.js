/*
     名字：黑暗時間神殿
     地图：時間神殿迴廊1
     描述：272010000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31178)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "未獲得女神的允許，無法通過神殿迴廊"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272010100), pi.getMap(272010100).getPortal(1)); //時間神殿迴廊2
    return true;
}
