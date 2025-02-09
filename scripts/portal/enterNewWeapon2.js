/*
     名字：隱藏地圖
     地图：陷阱！實驗室監獄
     描述：931000311
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23050)).getStatus() != 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請先去找受傷的斐勒談談"));
        return false;
    }
    if (pi.getMap(931000321).getCharacters().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "新武器開發實驗室目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(931000321).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(931000321), pi.getMap(931000321).getPortal(1)); //新武器開發實驗室
    pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(931000311));
    return true;
}
