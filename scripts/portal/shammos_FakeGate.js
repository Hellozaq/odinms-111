/*
     名字：冰雪峽谷
     地图：冰雪峽谷1
     描述：921120005
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(921120100), pi.getMap(921120100).getPortal(0)); //冰雪峽谷2
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
