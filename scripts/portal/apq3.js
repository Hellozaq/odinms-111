/*
     名字：隱藏地圖
     地图：階段 2 - 心弦(白天_時間)
     描述：670010300
 */

function enter(pi) {

    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("stage1") > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(670010400), pi.getMap(670010400).getPortal(1)); //階段 3 - 瘋狂轉接開關
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往階段 3 - 瘋狂轉接開關區域的入口，尚未開啟"));
    return false;
}
