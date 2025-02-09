/*
     名字：可疑的實驗室
     地图：危險的躲迷藏
     描述：931000012
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(0));
    ms.dispose();
    ms.openNpc(2159006);
}
