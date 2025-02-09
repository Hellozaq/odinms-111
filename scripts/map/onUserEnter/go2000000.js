/*
     名字：楓之島
     地图：楓之港
     描述：2000000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/2000000", 3));
    ms.dispose();
}
