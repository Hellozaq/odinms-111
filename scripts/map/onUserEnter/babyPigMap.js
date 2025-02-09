/*
     名字：隱密之地
     地图：茂盛的森林
     描述：900020110
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    ms.dispose();
}
