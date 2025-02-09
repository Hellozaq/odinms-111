/*
     名字：隱藏地圖
     地图：其他次元的艾德斯塔公園
     描述：931050120
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("擊敗莫斯提馬的幻像"));
    ms.dispose();
}
