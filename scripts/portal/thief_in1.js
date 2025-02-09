/*
     名字：隱藏地圖
     地图：岩石山丘
     描述：260010401
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3925)).getStatus() < 2 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3946)).getStatus() > 1) {
        return false;
    }
    pi.openNpc(2103008);
    return false;
}
