/*
     名字：隱藏地圖
     地图：實驗室入口
     描述：926130100
 */

function enter(pi) {

    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3367)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "猶利塔的實驗室2禁止外來者訪問"));
        return false;
    }
    if (pi.getMap(926130102).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "猶利塔的實驗室2目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(926130102).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(926130102), pi.getMap(926130102).getPortal(1)); //猶利塔的實驗室2
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(926130100));
    return true;
}
