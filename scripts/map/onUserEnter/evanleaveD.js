/*
     名字：猶塔家
     地图：小閣樓
     描述：100030100
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(0));
    ms.dispose();
}
