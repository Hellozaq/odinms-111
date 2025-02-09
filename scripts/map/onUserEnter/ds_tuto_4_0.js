/*
     名字：隱藏地圖
     地图：治療室
     描述：931050030
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    ms.dispose();
    ms.openNpc(2159344);
}
