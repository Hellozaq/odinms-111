/*
     名字：炎熱之路
     地图：納希綠洲城
     描述：260000000
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 30) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "專業技術村適用於30等以上的冒險家"));
        return false;
    }
    pi.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("ARDENTMILL"));
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910001000), pi.getMap(910001000).getPortal(6));
    return true;
}
