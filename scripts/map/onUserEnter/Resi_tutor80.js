/*
     名字：危險的躲迷藏
     地图：礦山後面
     描述：931000030
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    ms.dispose();
}
