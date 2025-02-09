/*
     名字：冰雪峽谷
     地图：萬年冰河洞穴
     描述：921120300
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(921120400), pi.getMap(921120400).getPortal(0)); //峽谷墓場
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
