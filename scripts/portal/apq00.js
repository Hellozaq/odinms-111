/*
     名字：隱藏地圖
     地图：階段 1 - 魔鏡
     描述：670010200
 */

function enter(pi) {

    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("stage0a") == 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(670010300), pi.getMap(670010300).getPortal(1)); //階段 2 - 心弦(白天_時間)
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往階段 2區域的入口，尚未開啟"));
    return false;
}
