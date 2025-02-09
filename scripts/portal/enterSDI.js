/*
     名字：隱密之地
     地图：青蛙嘴的家
     描述：922030000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22588)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(914100022).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "寂靜的洞穴目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(914100022).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914100022), pi.getMap(914100022).getPortal(1)); //寂靜的洞穴
    pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(922030000));
    return true;
}
