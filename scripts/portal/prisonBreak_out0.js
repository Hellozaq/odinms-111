/*
     名字：隱藏地圖
     地图：隱藏之塔
     描述：921160100
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "出口已被封鎖"));
    return false;
}
