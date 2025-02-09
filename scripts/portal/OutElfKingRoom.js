/*
     名字：精靈之林
     地图：國王休息處
     描述：101050010
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24005)).getStatus() < 2 && pi.getPlayer().getJob() == 2300) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "還沒有完全醒來，等完全醒來後再出去吧"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(101050000), pi.getMap(101050000).getPortal(7)); //櫻花處
    return true;
}
