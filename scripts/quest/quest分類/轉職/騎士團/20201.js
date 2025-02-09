/*
     名字：聖魂劍士的騎士等級試煉
     地图：耶雷弗
     描述：130000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20201)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20201).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("試煉的象徵全部帶來啦……很好。你具備了成為正式騎士的資格，你想踏上正式騎士之路嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20201).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1110);
            qm.removeAll(4032096);
            qm.sendNext("現在你已不再是修煉騎士，你已經成為了皇家騎士團的正式騎士。");
            break;
        case 2:
            qm.sendNext("我給了你一些SP，並傳授了你聖魂劍士技能中只有正式騎士才能學習的幾種技能，希望你能和靈魂一起變得更強。");
            break;
        case 3:
            qm.sendPrev("作為皇家騎士團的正式騎士，希望你能以端正的品行提高女皇的名譽。");
            break;
        case 4:
            qm.dispose();
    }
}
