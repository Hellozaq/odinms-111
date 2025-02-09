/*
     名字：隱藏地圖
     地图：危險之海1
     描述：923040100
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getId() == 923040100 && pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getMap().getId() == 923040200 && pi.getPlayer().itemQuantity(2430364) < 10) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於水壓的阻礙，需要攜帶10個氣泡"));
        return false;
    }
    pi.getPlayer().removeAll(2430364);
    map = pi.getPlayer().getMap().getId() + 100;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(pi.getPlayer().getMap().getId() == 923040100 ? 2 : 3));
    return true;
}
