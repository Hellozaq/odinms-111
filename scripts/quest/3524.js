/*
     名字：找回遺失的記憶
     地图：魔法森林圖書館
     描述：101000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("……從這股強大的魔力來看，你應該是位優秀的法師……在很久之前，有一位很有潛力的初心者找到我，說要想成為法師。");
            break;
        case 1:
            qm.sendNextPrev("沒想到，當初連魔法都不會使用的人，如今已經變成了優秀的法師！真了不起……看到你的成長，我感到很高興。");
            break;
        case 2:
            qm.sendNextPrev("請繼續努力吧，作為把你帶上法師之路的人，我確信，你一定可以變成更強大的法師……");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3524).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
