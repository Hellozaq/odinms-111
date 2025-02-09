/*
     名字：楓之島
     地图：大菇菇
     描述：50000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/50000", 3));
    ms.dispose();
}
