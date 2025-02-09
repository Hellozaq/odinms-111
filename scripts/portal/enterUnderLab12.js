/*
     名字：隱藏地圖
     地图：傑利麥勒實驗室入口
     描述：931000640
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "入口以被封鎖"));
    return true;
}
