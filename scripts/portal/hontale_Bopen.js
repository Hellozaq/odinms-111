function enter(pi) {

    var stage = pi.getPlayer().getMap().getId() - 240050100;
    if (pi.getPlayer().getMap().getId() == 240050105) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(240050100), pi.getMap(240050100).getPortal(0));
        return true;
    }
    if (pi.getPlayer().getMap().getReactorByName("passKey" + stage).getState() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，尚未開啟"));
        return false;
    }
    map = pi.getPlayer().getMap().getId() + 1;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
    return true;
}
