/*
     名字：女皇的騎士團長
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            qm.sendNext("首先，感謝你的出色工作，如果不是你，我……將無法擺脫艾雷諾爾的詛咒，非常感謝你。");
            break;
        case 1:
            qm.sendNextPrev("這一連串的事件讓一件事變得非常清楚，你已經投入了無數個小時的努力來提升自己，為皇家騎士團做出貢獻。");
            break;
        case 2:
            qm.sendYesNo("為了表彰你的辛勤工作和成就，我想給你一個新的頭銜，並再次祝福你，你會接受這個嗎？");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(20408).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(qm.getPlayer().getJob() + 1);
            qm.sendOk("為了勇敢地與黑魔法師戰鬥，我將從現在起任命你為皇家騎士團的新騎士團長，請明智地使用您的權力和權威，幫助保護楓之谷世界的公民。");
            break;
        case 4:
            qm.dispose();
    }
}
