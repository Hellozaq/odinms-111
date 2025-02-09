/*
     名字：真正的冒險家
     地图：祭司之林
     描述：240010501
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1451)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1451).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("你證明了自己擁有成為英雄的實力，現在沒有必要繼續證明了……你願意成為真正的冒險家嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1451).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(qm.getPlayer().getJob() + 1);
            qm.gainItem(4031343, -1);
            qm.gainItem(4031344, -1);
            qm.sendNext("從一名自由的冒險家開始，現在你已經成為了力量、善良和勇氣兼備的真正的冒險家。");
            break;
        case 2:
            qm.sendNext("如果同時具備這些特質的人不是英雄的話，那誰能被稱為英雄呢。");
            break;
        case 3:
            qm.sendPrev("英雄不是天生的，而是通過努力達成的……希望你成為真正的英雄，帶領楓之谷世界走上正確的方向。");
            break;
        case 4:
            qm.dispose();
    }
}
