/*
     名字：隱藏地圖
     地图：突破船首!
     描述：925100100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getReactorByName("treasure1").getState() > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(925100200), pi.getMap(925100200).getPortal(0)); //突破甲板1
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
