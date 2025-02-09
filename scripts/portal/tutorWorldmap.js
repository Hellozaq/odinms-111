/*
     名字：皇后之路
     地图：小橋樑
     描述：130030006
 */

function enter(pi) {
    if (!pi.getPlayer().hasSummon())
        pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonMessage(11));
    return true;
}
