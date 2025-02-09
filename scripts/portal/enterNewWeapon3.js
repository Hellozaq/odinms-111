/*
     名字：隱藏地圖
     地图：陷阱！實驗室監獄
     描述：931000312
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23051)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請先去找受傷的傑奇談談"));
        return false;
    }
    if (pi.getMap(931000322).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "新武器開發實驗室目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(931000322).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931000322), pi.getMap(931000322).getPortal(1)); //新武器開發實驗室
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(931000312));
    return true;
}
