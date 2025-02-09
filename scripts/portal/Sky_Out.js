/*
     名字：神木村
     地图：天空地區2
     描述：240080200
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉"));
    return false;
}
