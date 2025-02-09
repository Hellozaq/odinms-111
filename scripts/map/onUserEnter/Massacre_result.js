/*
     名字：隱藏地圖
     地图：堆積灰塵的月台
     描述：910320001
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("killing/fail", 3));
    ms.dispose();
}
