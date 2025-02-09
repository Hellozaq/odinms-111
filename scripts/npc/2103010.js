/*
     名字：納希民宅2 櫥櫃
     地图：民宅2
     描述：260000203
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)).getCustomData() == null) {
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)).setCustomData("0000");
    }
    var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)).getCustomData();
    var slot = cm.getNpc() - 2103009;
    var ch = progress[slot];
    if (ch == '0' && cm.getPlayer().itemQuantity(4031579)) {
        var nextProgress = progress.substr(0, slot) + '3' + progress.substr(slot + 1);
        cm.gainItem(4031579, -1);
        cm.sendOk("寶物已經投放好了。");
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)).setCustomData(nextProgress);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3926)), true);
    }
    cm.dispose();
}
