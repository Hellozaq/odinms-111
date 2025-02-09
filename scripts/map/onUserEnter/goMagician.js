/*
     名字：楓之島
     地图：法師教程
     描述：1020200
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction3.img/magician/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
    ms.dispose();
}
