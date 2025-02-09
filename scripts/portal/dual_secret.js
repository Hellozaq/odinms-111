/*
     名字：墮落城市
     地图：秘密據點
     描述：103000003
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2369)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "牆上有個暗洞"));
        return false;
    }
    if (pi.getMap(910350100).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "前代達克魯的房間目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(910350100).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(910350100), pi.getMap(910350100).getPortal(1)); //前代達克魯的房間
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(103000003));
    for (var i = 0; i < 6; i++)
        pi.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9001019), new java.awt.Point(-150 + (Math.random() * 350), 148));
    return true;
}
