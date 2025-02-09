/*
     名字：菇菇王國
     地图：菇菇森林路口
     描述：106020000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("temaD/enter/mushCatle", 3));
    ms.dispose();
}
