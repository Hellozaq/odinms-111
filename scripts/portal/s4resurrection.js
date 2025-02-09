/*
     名字：水世界
     地图：危險海峽2
     描述：230040300
 */

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4001108)) {
        return false;
    }
    if (pi.getMap(923000100).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "冰冷的洞穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(923000100).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(923000100), pi.getMap(923000100).getPortal(1)); //冰冷的洞穴
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(230040300));
    return true;
}
