/*
     名字：菇菇王國
     地图：中央城塔
     描述：106021201
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "Unavailable."));
    return true;
}
