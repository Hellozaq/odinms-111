/*
     名字：動畫
     地图：新手村0
     描述：900090100
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/meetWithDragon/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
    ms.dispose();
}
