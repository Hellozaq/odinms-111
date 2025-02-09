/*
     名字：黑色翅膀佔領地
     地图：埃德爾斯坦
     描述：310000000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23121)).getStatus() == 1) {
        if (pi.getMap(931000420).getCharacters().size() < 1) {
            pi.getMap(931000420).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000420), pi.getMap(931000420).getPortal(1)); //危險！臨時機場
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "受到了盜賊的襲擊，擊退盜賊，尋找飛行員雷德拓吧"));
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310000000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "危險！臨時機場目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23023)).getStatus() == 1 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23024)).getStatus() == 1 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23025)).getStatus() == 1) {
        if (pi.getMap(931000100).getCharacters().size() < 1) {
            pi.getMap(931000100).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000100), pi.getMap(931000100).getPortal(1)); //2次轉職
            pi.getPlayer().getMap().spawnNpc(2159100, new java.awt.Point(-157, -23)); //須勒
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310000000));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "2次轉職目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23141)).getStatus() > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23142)).getStatus() < 2) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931000600), pi.getMap(931000600).getPortal(1)); //臨時機場
        return true;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(310000010), pi.getMap(310000010).getPortal(1)); //埃德爾斯坦臨時機場
    return true;
}
