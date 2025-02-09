/*
     名字：隱藏地圖
     地图：武陵道場特別樓
     描述：925040001
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "武公：你個病夫，我要把你打趴下為止"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(925040000), pi.getMap(925040000).getPortal(1)); //武陵道場後路
    return true;
}
