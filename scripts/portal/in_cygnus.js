/*
     名字：騎士團要塞
     地图：西格諾斯庭園
     描述：271040000
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getId() == 271040000) {
        pi.openNpc(2143004);
        return true;
    }
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(271040210), pi.getMap(271040210).getPortal(0)); //西格諾斯後院
    return false;
}
