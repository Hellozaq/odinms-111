/*
     名字：危險的躲迷藏
     地图：人煙稀少的石山
     描述：931000021
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/Resistance/TalkJ"));
    ms.dispose();
}
