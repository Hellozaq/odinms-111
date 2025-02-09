/*
     名字：危險的躲迷藏
     地图：人煙稀少的石山
     描述：931000001
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("resistance/tutorialGuide", 3));
    ms.dispose();
}
