/*
     名字：依菲雅
     地图：第五座塔樓
     描述：211061001
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3173)).getStatus() == 1 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3175)).getStatus() == 1) {
        cm.getPlayer().changeMap(cm.getMap(211070200), cm.getMap(211070200).getPortal(3));
        cm.dispose();
        return;
    }
    cm.sendOk("呜……呜………呜呜……。");
    cm.dispose();
}
