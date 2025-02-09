/*
     名字：維多利亞
     地图：墮落城市後街
     描述：103050000
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 10) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "自由市場適用於10等以上的冒險家"));
        return false;
    }
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("FREE_MARKET"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910000000), pi.getMap(910000000).getPortal(34));
    return true;
}
