/*
     名字：隱藏地圖
     地图：大廳
     描述：682000100
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "It seems to be locked."));
    return true;
}
