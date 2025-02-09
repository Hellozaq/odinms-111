/*
     名字：楓之島
     地图：楓葉山丘
     描述：10000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.dispose();
}
