/*
     名字：艾納斯島
     地图：長老公館
     描述：211000001
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22575)).getStatus() != 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22577)).getStatus() != 1) {
        return false;
    }
    if (pi.getMap(921110100).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "亡者們的森林目前擁擠，請稍後再試"));
        return true;
    }
    pi.getMap(921110100).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(921110100), pi.getMap(921110100).getPortal(1)); //亡者們的森林
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(211000001));
    return true;
}
