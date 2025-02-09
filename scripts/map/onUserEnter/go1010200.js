/*
     名字：楓之島
     地图：冒險者修練場2
     描述：1010200
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/1010200", 3));
    ms.dispose();
}
