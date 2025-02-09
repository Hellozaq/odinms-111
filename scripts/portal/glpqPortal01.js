/*
     名字：組隊任務
     地图：團結的測試
     描述：610030500
 */

function enter(pi) {
    var y = pi.getPlayer().getJob();
    if (y > 300 && y < 330 || y > 1300 && y < 1320 || y > 2300 && y < 2320 || y > 3300 && y < 3320) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(610030540), pi.getMap(610030540).getPortal(1)); //弓箭手專精的房間
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "弓箭手專精的房間只適用于弓箭手"));
    return false;
}
