/*
     名字：5個岔路
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
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
            qm.sendNext("你已經達到了10級，說明你很努力。很好。你現在已經超出了初心者的境界，我認可你有正式成為修煉騎士的資格。但在這之前，我想先問你一個問題。你想選擇哪條騎士之路呢？");
            break;
        case 1:
            qm.sendNextPrev("騎士之路不止一條。在前面等待著你的，一共有五條路……選擇哪條路是你的自由。但至少不要讓自己後悔。");
            break;
        case 2:
            qm.sendYesNo("現在往左看。騎士團的團長們會等著你的選擇。你只需要從中選擇一個自己將要發展的職業，想清楚之後，就去和騎士導師交談吧！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(20020).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(20100).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
