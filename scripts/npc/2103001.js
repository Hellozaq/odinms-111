/*
     名字：祕密之壁
     地图：納希民宅
     描述：260000200
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3927)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3927)).setCustomData(1);
    cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3927)), true);
    cm.sendOk("牆上寫著一些細小的字。#b鐵錘#k、#b短刀#k、#b弓#k？什麼意思呢？");
    cm.dispose();
}
