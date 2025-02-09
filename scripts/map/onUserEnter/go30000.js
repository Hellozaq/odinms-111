/*
     名字：楓之島
     地图：嫩寶花園
     描述：30000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/30000", 3));
    ms.dispose();
}
