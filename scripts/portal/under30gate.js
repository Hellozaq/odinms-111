/*
     名字：威廉的古堡
     地图：地下水路
     描述：990000600
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() > 30) {

        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "水路之迷宮只適用於30等以下的冒險家"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(990000640), pi.getMap(990000640).getPortal(1)); //水路之迷宮
    return true;
}
