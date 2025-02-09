/*
     名字：楓之島
     地图：弓箭手教程
     描述：1020300
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroLock(1));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction3.img/archer/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
    ms.dispose();
}
