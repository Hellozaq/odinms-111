/*
     名字：神木村
     地图：遭破壞的龍之巢穴
     描述：240040520
 */

var map = 240040520;
var maps = 240040900; //蜥蜴保護區
var num = 10;

function enter(pi) {

    if (pi.getPlayer().getMap().getId() != map) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(3));
        return true;
    }
    if (pi.getPlayer().getLevel() > 200) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "<迷你地城>適用於200等以下的冒險家"));
        return false;
    }
    if (!pi.getPlayer().itemQuantity(4032055)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "<迷你地城>需要第I代迷你地城入場券(一般)"));
        return false;
    }
    for (var i = 0; i < num; i++)
        if (pi.getMap(maps + i).getCharacters().size() < 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(maps + i), pi.getMap(maps + i).getPortal(1));
            pi.gainItem(4032055, -1);
            return true;
        }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "<迷你地城>區域目前擁擠，請稍後再試"));
    return false;
}
