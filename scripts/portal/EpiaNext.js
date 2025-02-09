/*
     名字：獅子王城
     地图：秘密走道
     描述：921140000
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300296) == null) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(921140001), pi.getMap(921140001).getPortal(3)); //陰鬱的見面室
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
