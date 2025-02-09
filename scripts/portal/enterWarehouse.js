/*
     名字：亞泰爾營地
     地图：營地會議場
     描述：300000010
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21752)).getStatus() > 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21764)).getStatus() < 1) {
        if (pi.getMap(930010000).getCharacters().size() < 1) {
            pi.getMap(930010000).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(930010000), pi.getMap(930010000).getPortal(1));
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "進入圖書館了，利用滑鼠來尋找保管庫的位置吧"));
            pi.getPlayer().startMapTimeLimitTask(300, pi.getMap(300000010));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險的圖書館目前擁擠，請稍後再試"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(300000011), pi.getMap(300000011).getPortal(1)); //危險的圖書館
    return true;
}
