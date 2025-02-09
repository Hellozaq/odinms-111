/*
     名字：隱藏地圖
     地图：廢棄的地鐵月台
     描述：910320000
 */

function enter(pi) {
    pi.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction2.img/metro/Im"));
    return true;
}
