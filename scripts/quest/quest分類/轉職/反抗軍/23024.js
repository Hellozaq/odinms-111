/*
     名字：復仇和成長
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 3) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23024)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23024).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("黑色翅膀的報告被取回來啦。幹得好！我就知道你一定可以做到。");
            break;
        case 1:
            qm.sendNextPrev("這個任務是我特意從其他人那裡搶過來交給你的。黑色翅膀的那個傢夥，從前讓你吃過苦頭，不是嗎？我把任務交給你，就是想讓你向他復仇。");
            break;
        case 2:
            qm.sendNextPrev("想到你能完成得這麼乾淨俐落……真了不起！你在這麼短的時間內，獲得了驚人的成長。");
            break;
        case 3:
            qm.sendAcceptDecline("那樣的話，就沒有必要苦惱了！我本來覺得有點早，不過看來好像完全用不著擔心了。我可以讓你進入下一個階段了。讓你變成和以前完全不同的、擁有更強力量的狂豹獵人…");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(23024).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3310);
            qm.gainItem(4032738, -1);
            qm.sendNext("我已經讓你轉職了，同時也傳授了你更強的技能。現在你已經不是以前的你了。你已經變成了更快、更堅韌、更強大的狂豹獵人了。盡情享受你新的力量吧。");
            break;
        case 5:
            qm.sendOk("下次課程再見。在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 6:
            qm.dispose();
    }
}
