/*
     名字：末日反抗軍本部
     地图：訓練房入口
     描述：310010010
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23238)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(931050200).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "訓練房的倉庫目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(931050200).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931050200), pi.getMap(931050200).getPortal(1)); //訓練房的倉庫
    pi.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300456), new java.awt.Point(400, -4));
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(310010010));
    return true;
}
