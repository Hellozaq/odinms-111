/*
     名字：艾靈森林
     地图：洞穴深處
     描述：300010420
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(300010410), pi.getMap(300010410).getPortal(2)); //岩石山洞穴
    return true;
}
