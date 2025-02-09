/*
     名字：楓之島
     地图：冒險者修練場入口
     描述：1010000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/1010000", 3));
    ms.dispose();
}
