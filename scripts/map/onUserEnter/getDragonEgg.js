/*
     名字：動畫
     地图：轉職
     描述：900090103
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/getDragonEgg/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
    ms.dispose();
}
