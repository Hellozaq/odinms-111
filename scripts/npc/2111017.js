/*
     名字：第一個導管手把
     地图：失蹤煉金術士的家
     描述：261000001
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).getStatus() != 1) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).getStatus() > 1)
            cm.getPlayer().changeMap(cm.getMap(261000001), cm.getMap(261000001).getPortal(1));
        cm.dispose();
        return;
    }
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3339)).setCustomData(1);
    cm.sendOk("第一個導管安裝完成。");
    cm.dispose();
}
