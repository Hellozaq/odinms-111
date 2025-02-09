/*
     名字：隱藏地圖
     地图：實驗室入口
     描述：926130100
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3366)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "猶利塔的實驗室1禁止外來者訪問"));
        return false;
    }
    if (pi.getMap(926130101).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "猶利塔的實驗室1目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(926130101).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926130101), pi.getMap(926130101).getPortal(1)); //猶利塔的實驗室1
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(926130100));
    return true;
}
