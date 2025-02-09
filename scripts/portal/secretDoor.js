/*
     名字：蒙特鳩研究所
     地图：研究所1樓走道
     描述：261010000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)).getStatus() == 2 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)).getCustomData() == 1) {
        portal = pi.getPlayer().getMap().getId() == 261010000 ? 2 : 1;
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(261030000), pi.getMap(261030000).getPortal(portal));
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3360)).getStatus() == 1) {
        pi.openNpc(2111024);
    }
    return false;
}
