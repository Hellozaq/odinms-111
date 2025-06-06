/*
     名字：組隊任務
     地图：團結的測試
     描述：610030500
 */

function enter(pi) {
    var y = pi.getPlayer().getJob();
    if (y >= 200 && y < 240 || y >= 1200 && y < 1220 || y >= 2200 && y < 2220 || y >= 3200 && y < 3220) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(610030521), pi.getMap(610030521).getPortal(1)); //法師專精的房間
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "法師專精的房間只適用于法師"));
    return false;
}
