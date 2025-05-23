/*
     名字：維多利亞港
     地图：維多利亞港
     描述：104000000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21733)).getStatus() == 1) {
        if (pi.getMap(910400000).getCharacters().size() < 1) {
            pi.getMap(910400000).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(910400000), pi.getMap(910400000).getPortal(1)); //危險的資料商店
            pi.getPlayer().getMap().spawnNpc(1204003, new java.awt.Point(90, 120));
            pi.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300382), new java.awt.Point(213, 120));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(104000000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險的資料商店目前擁擠，請稍後再試"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(104000004), pi.getMap(104000004).getPortal(1)); //特魯的情報商店
    return true;
}
