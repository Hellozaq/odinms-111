/*
     名字：楓之島
     地图：冒險者修練場3
     描述：1010300
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/1010300", 3));
    ms.dispose();
}
