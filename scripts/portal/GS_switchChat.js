/*
     名字：霧之海
     地图：第5 作戰室
     描述：923020114
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction3.img/ghostShip/chat"));
    return true;
}
