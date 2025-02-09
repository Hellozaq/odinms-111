/*
     名字：隱藏地圖
     地图：階段 4 - 終極悍將
     描述：670010500
 */

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim.getProperty("stage3") > 0) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(670010600), pi.getMap(670010600).getPortal(1)); //階段 5 - 心跳不規則
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往階段 5 - 心跳不規則區域的入口，尚未開啟"));
    return false;
}
