/*
     名字：隱藏地圖
     地图：前往海盜船之路
     描述：925100000
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(925100100), pi.getMap(925100100).getPortal(0)); //突破船首!
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
