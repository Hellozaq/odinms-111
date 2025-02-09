/*
     名字：北部森林
     地图：綠樹的藤條
     描述：101030100
 */

function enter(pi) {

    if (!pi.getPlayer().itemQuantity(4031346)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "如果有一顆魔法種子，可以移動到樹洞的另一端"));
        return false;
    }
    pi.gainItem(4031346, -1);
    map = pi.getPlayer().getMap().getId() == 240010100 ? 101030100 : 240010100
    portal = pi.getPlayer().getMap().getId() == 240010100 ? "minar00" : "elli00"
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(portal));
    return true;
}
