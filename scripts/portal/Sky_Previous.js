/*
     名字：神木村
     地图：天空地區盡頭
     描述：240080600
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉"));
    return true;
}
