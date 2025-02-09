/*
     名字：獅子王城
     地图：第一座塔
     描述：211060200
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032858)) {
        if (pi.getMap(921140100).getCharacters().size() < 1) {
            pi.getMap(921140100).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(921140100), pi.getMap(921140100).getPortal(1)); //危險的第一座塔樓
            pi.getMap(921140100).spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(8210010), new java.awt.Point(1171, -183));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(211060200));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險的第一座塔樓目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().itemQuantity(4032832)) {
        if (pi.getMap(211060201).getCharacters().size() < 1) {
            var em = pi.getEventManager("tower_First");
            em.startInstance(pi.getPlayer());
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "第一座塔樓目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往第一座塔樓的門是關著的，需要找到第一座塔的鑰匙打開它"));
    return false;
}
