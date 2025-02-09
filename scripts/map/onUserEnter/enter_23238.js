/*
     名字：隱藏地圖
     地图：訓練房的倉庫
     描述：931050200
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("擊敗黑色翅膀的間諜"));
    ms.dispose();
}
