/*
     名字：獅子王之城
     地图：亞尼的禁閉室
     描述：211061100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(8210013) == null) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(211061000), pi.getMap(211061000).getPortal(6)); //第五座塔
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
