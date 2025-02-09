/*
     名字：隱藏地圖
     地图：階段 1 - 魔鏡
     描述：670010200
 */

function enter(pi) {
    if (pi.getPortal().getId() == 16) {
        if (pi.getPlayer().getGender() > 0) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(670010200), pi.getMap(670010200).getPortal(4));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "該區域只允許女士進入"));
        return false;
    }
    if (pi.getPortal().getId() == 15) {
        if (pi.getPlayer().getGender() < 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(670010200), pi.getMap(670010200).getPortal(3));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "該區域只允許男士進入"));
        return false;
    }
}
