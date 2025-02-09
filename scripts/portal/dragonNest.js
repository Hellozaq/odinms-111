/*
     名字： 神木村
     地图： 危險巢穴下方
          描述：240040610
道具: 4001094
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3706)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(240040612), pi.getMap(240040612).getPortal(1)); //九靈龍巢穴
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3706)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "九靈龍巢穴適用於接受敢死隊的任務的冒險家"));
        return false;
    }
    if (pi.getMap(240040611).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "九靈龍巢穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(240040611).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240040611), pi.getMap(240040611).getPortal(1)); //九靈龍巢穴
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(240040610));
    return true;
}
