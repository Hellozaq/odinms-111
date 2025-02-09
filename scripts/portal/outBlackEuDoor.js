/*
     名字：精靈森林
     地图：受到攻擊的發光的洞穴之路
     描述：910150220
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(101050000), pi.getMap(101050000).getPortal(9)); //櫻花處
    return true;
}
