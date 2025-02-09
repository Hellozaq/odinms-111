/*
     名字：楓之島
     地图：小菇菇
     描述：10000
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開該區域，就不能再返回了"));
    return false;
}
