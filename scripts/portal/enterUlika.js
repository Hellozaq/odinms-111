/*
     名字：水泥路
     地图：街燈路
     描述：310030310
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23930)).getStatus() == 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931010040), pi.getMap(931010040).getPortal(1)); //街燈路角落
    }
    return true;
}
