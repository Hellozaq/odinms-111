/*
     名字：乾枯的路
     地图：礦山後路
     描述：310040210
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20741)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931050600), pi.getMap(931050600).getPortal(1)); //傑利麥勒實驗室入口
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23144)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931000630), pi.getMap(931000630).getPortal(2)); //傑利麥勒實驗室入口
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23146)).getStatus() == 1) {
        if (pi.getMap(931000640).getCharacters().size() < 1) {
            pi.getMap(931000640).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000640), pi.getMap(931000640).getPortal(1)); //傑利麥勒實驗室入口
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310040210));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "傑利麥勒實驗室入口目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23147)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23150)).getStatus() != 1) {
        if (pi.getMap(931000650).getCharacters().size() < 1) {
            pi.getMap(931000650).resetFully();
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931000650), pi.getMap(931000650).getPortal(1)); //傑利麥勒實驗室入口
            pi.openNpc(2159349);
            pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(310040210));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "傑利麥勒實驗室入口目前擁擠，請稍後再試"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22613)).getStatus() == 1) {
        if (pi.getMap(931050720).getCharacters().size() < 1) {
            pi.playPortalSE();
            pi.getPlayer().changeMap(pi.getMap(931050720), pi.getMap(931050720).getPortal(1)); //實驗室內部
            pi.getPlayer().startMapTimeLimitTask(1200, pi.getMap(310040210));
            return true;
        }
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "實驗室內部目前擁擠，請稍後再試"));
        return false;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "矿山禁止外來者訪問"));
    return false;
}
