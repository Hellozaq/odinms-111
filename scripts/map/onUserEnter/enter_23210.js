/*
     名字：隱藏地圖
     地图：艾德斯塔公園噴水台附近3
     描述：931050210
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("傳聞中的怪物出現了，把它消滅掉"));
    ms.dispose();
}
