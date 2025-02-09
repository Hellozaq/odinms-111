/*
     名字：生命之穴
     地图：抉擇洞穴
     描述：240050200
*/

function enter(pi) {
    if (pi.getPlayer().getParty().getLeader().getId() != pi.getPlayer().getId()) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "你不是队长，只有队长才能进入传送门。"));
        return false;
    }
    if (pi.getPlayer().getMap().getReactorByName("light").getState() == 1) {
        pi.playPortalSE();
        pi.warpParty(240050300); //光明洞穴
        return true;
    }
    if (pi.getPlayer().getMap().getReactorByName("light").getState() == 3) {
        pi.playPortalSE();
        pi.warpParty(240050310); //暗黑洞穴
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "前往下一区域之前，请击中灯泡来决定小组的命运。"));
    return false;
}