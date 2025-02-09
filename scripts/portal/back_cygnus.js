/*
     名字：騎士團要塞
     地图：簡陋的庭園
     描述：271040110
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() != 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(271040100), pi.getMap(271040100).getPortal(1)); //西格諾斯殿堂
    return true;
}
