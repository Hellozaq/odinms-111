/*
     名字：危險的躲迷藏
     地图：可疑的實驗室
     描述：931000010
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/resistanceTutorial/userTalk"));
    ms.dispose();
}
