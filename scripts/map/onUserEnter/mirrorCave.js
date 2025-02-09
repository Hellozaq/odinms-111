/*
     名字：瑞恩島
     地图：鏡子洞窟
     描述：140030000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.dispose();
}
