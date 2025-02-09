/*
     名字：龍沉睡的島
     地图：被雪覆蓋的森林
     描述：914100010
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22580)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(914100020), pi.getMap(914100020).getPortal(1)); //寂靜的洞穴
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22589)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(914100021), pi.getMap(914100021).getPortal(2)); //寂靜的洞穴
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22589)).getStatus() > 0) {
        if (pi.getMap(914100023).getCharacters().size() < 1) {
            pi.getMap(914100023).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(914100023), pi.getMap(914100023).getPortal(1)); //寂靜的洞穴
            pi.getPlayer().getMap().spawnNpc(1013204, new java.awt.Point(-300, -340));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(914100010));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "寂靜的洞穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "寂靜的洞穴裡封印著沉睡著的亞普力耶"));
    return false;
}
