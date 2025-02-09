/*
     名字：可可島
     地图：火箭著陸
     描述：912060400
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/Scene01"));
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/out02"));
    ms.dispose();
}
