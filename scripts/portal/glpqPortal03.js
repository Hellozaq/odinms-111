/*
     名字：組隊任務
     地图：團結的測試
     描述：610030500
 */

function enter(pi) {
    var y = pi.getPlayer().getJob();
    if (y > 400 && y < 440 || y > 1400 && y < 1420) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(610030530), pi.getMap(610030530).getPortal(1)); //盜賊專精的房間
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盜賊專精的房間只適用于盜賊"));
    return false;
}
