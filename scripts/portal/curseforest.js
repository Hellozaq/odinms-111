/*
     名字：詛咒之林
     地图：邪惡氣息的森林1
     描述：101040310
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2224)).getStatus() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "詛咒之林被神秘力量封印"));
        return false;
    }
    cal = java.util.Calendar.getInstance();
    hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    map = pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2227)).getStatus() > 1 ? 910100001 : 910100000;
    if (hour < 7 || hour > 16) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(1));
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於時差關係，現在無法訪問詛咒之林"));
    return false;
}
