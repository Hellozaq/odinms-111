/*
     名字：破風使者的騎士等級試煉
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20203)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20203).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("試煉的象徵全部帶來啦……很好。你具備了成為正式騎士的資格，你想踏上正式騎士之路嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20203).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1310);
            qm.removeAll(4032098);
            qm.sendNext("現在你已不再是修煉騎士，你已經成為了皇家騎士團的正式騎士。");
            break;
        case 2:
            qm.sendNext("我給了你SP，此外還傳授了破風使者技能中只有正式騎士才能學習的技能，希望你能和風一起不斷磨煉。");
            break;
        case 3:
            qm.sendPrev("作為皇家騎士團的正式騎士，希望你能一直保持理性的思維。");
            break;
        case 4:
            qm.dispose();
    }
}
