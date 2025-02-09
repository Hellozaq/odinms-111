/*
     名字：暗夜行者的騎士等級試煉
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20204)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20204).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("試煉的象徵全部帶來啦……不過，就這點小事還不值得我稱讚，我確認你擁有成為正式騎士的資格，你願意成為正式騎士嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20204).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1410);
            qm.removeAll(4032099);
            qm.sendNext("現在你已不再是修煉騎士，你已經成為了皇家騎士團的正式騎士。");
            break;
        case 2:
            qm.sendNext("我給了你一些SP，雖然不多，但可以用來學習新傳授的技能，你可以和黑暗一起，試驗一下夜行者技能中只有正式騎士才能學習的那些技能。");
            break;
        case 3:
            qm.sendPrev("作為皇家騎士團的正式騎士，希望你不要陷入黑暗，雖然自己身在黑影之中。");
            break;
        case 4:
            qm.dispose();
    }
}
