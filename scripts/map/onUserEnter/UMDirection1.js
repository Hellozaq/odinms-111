/*
     名字：隱藏地圖
     地图：聯盟的結成
     描述：913050001
 */

function start() {
    ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction5.img/unitedMaple/Scene10"));
    ms.dispose();
}
