/*
     名字：霧之海
     地图：第1 作戰室
     描述：923020110
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉"));
    return true;
}
