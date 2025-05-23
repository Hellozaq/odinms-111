/*
     名字：隱藏地圖
     地图：階段 3 - 瘋狂轉接開關
     描述：670010400
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("stage2") > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(670010500), pi.getMap(670010500).getPortal(1)); //階段 4 - 終極悍將
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往階段 4 - 終極悍將區域的入口，尚未開啟"));
    return false;
}
