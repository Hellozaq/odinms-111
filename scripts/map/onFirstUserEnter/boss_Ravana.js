/*
     名字：黃金寺廟
     地图：惡靈洞穴
     描述：950101010
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("六手邪神出現了"));
    ms.dispose();
}
