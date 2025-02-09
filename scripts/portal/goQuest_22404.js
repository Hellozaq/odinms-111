/*
     名字：水世界
     地图：動物園
     描述：230000003
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22404)).getStatus() != 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22405)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(923030000).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "寂靜的大海裡目前繁忙，請稍後再試"));
        return true;
    }
    pi.getMap(923030000).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(923030000), pi.getMap(923030000).getPortal(1)); //寂靜的大海裡
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(230000003));
    return true;
}
