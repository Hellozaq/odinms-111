/*
     名字：動畫
     地图：新手村1
     描述：900090101
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/PromiseDragon/Scene0"));
    ms.dispose();
}
