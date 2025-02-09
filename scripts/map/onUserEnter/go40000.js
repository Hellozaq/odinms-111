/*
     名字：楓之島
     地图：小樹林
     描述：40000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/40000", 3));
    ms.dispose();
}
