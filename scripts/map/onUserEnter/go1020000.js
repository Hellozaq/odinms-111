/*
     名字：楓之島
     地图：選擇岔道
     描述：1020000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.dispose();
}
