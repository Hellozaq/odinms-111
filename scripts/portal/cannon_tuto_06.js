/*
     名字：可可島
     地图：淺海地帶
     描述：3000100
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction4.img/cannonshooter/face00"));
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.IntroEnableUI(1));
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.getDirectionInfo(3, 4));
    pi.openNpc(1096003);
    return true;
}
