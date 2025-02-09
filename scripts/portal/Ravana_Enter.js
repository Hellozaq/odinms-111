/*
     名字：黃金寺廟
     地图：封印神殿入口
     描述：950101000
 */

function enter(pi) {
    var level = pi.getPlayer().getLevel();
    var mob = pi.getPlayer().getMap().getId() == 809061010 ? 9409018 : pi.getPlayer().getMap().getId() == 950101011 ? 9500390 : pi.getPlayer().getMap().getId() == 950101012 ? 9500391 : 9500392;
    var map = pi.getPlayer().getMap().getId() == 809061000 ? 809061010 : level < 50 ? 950101011 : level < 90 ? 950101012 : 950101013;
    if (pi.getPlayer().getMap().getId() == 809061000 && level < 120) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "惡靈洞穴適用於120+等以上的冒險家"));
        return false;
    }
    if (pi.getPlayer().itemQuantity(4001433) < 20) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "朝拜六手邪神寺廟，需要供奉20顆太陽火花"));
        return false;
    }
    if (pi.getMap(map).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "惡靈洞穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.gainItem(4001433, -20);
    pi.getMap(map).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
    pi.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mob), new java.awt.Point(1000, 513));
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(pi.getPlayer().getMap().getId() == 809061010 ? 809061000 : 950101000));
    return true;
}
