/*
     名字：玩具城
     地图：玩具城村莊
     描述：220000300
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22596)).getStatus() != 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(922030000), pi.getMap(922030000).getPortal(1)); //青蛙嘴的家
        return false;
    }
    if (pi.getMap(922030001).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "青蛙嘴的家目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(922030001).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(922030001), pi.getMap(922030001).getPortal(1)); //青蛙嘴的家
    pi.getPlayer().getMap().spawnNpc(1013206, new java.awt.Point(146, -21));
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(220000300));
    return true;
}
