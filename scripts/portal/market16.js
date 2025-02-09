/*
     名字：皇后之路
     地图：耶雷弗岔道
     描述：130000200
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
