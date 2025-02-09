/*
     名字：楓之島
     地图：大菇菇
     描述：50000
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("UI/tutorial.img/26"));
    return true;
}
