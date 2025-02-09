/*
     名字：鯨魚號
     地图：寢室
     描述：912060500
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    return true;
}
