/*
     名字：隱藏地圖
     地图：危險之海1
     描述：923040100
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉"));
    return false;
}
