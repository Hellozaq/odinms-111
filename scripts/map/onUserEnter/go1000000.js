/*
     名字：彩虹之地
     地图：楓葉村
     描述：1000000
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.environmentChange("maplemap/enter/1000000", 3));
    ms.dispose();
}
