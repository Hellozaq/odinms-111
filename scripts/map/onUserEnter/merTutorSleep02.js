/*
     名字：精靈之林
     地图：國王休息處
     描述：101050010
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    ms.dispose();
}
