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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23023)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23023).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("黑色翅膀的報告被取回來啦。幹得好！我就知道你一定可以做到。");
            break;
        case 1:
            qm.sendNextPrev("呵呵……這次任務是我故意交給你的，黑色翅膀的那個傢夥，好像曾經讓你吃過苦頭吧？過去你連他的衣角都碰不到，現在竟然這麼輕易就打敗了他。");
            break;
        case 2:
            qm.sendNextPrev("你確實是個了不起的傢夥，老實說，我根本沒想到你會在這麼短的時間內成長到現在這個程度。我還以為你會費一番功夫呢…");
            break;
        case 3:
            qm.sendAcceptDecline("對於成長的確認這樣就可以了！我還以為可能有點早，但好像完全用不著擔心了。我們進入下一個階段吧！你會變成以前根本無法想像的擁有更強力量的煉獄巫師……");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(23023).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3210);
            qm.gainItem(4032737, -1);
            qm.sendNext("我讓你轉了職，同時向你傳授了比之前的技能更強的技能。現在你已經不是從前的你了。你已經變成更強、更狂暴的煉獄巫師。呵呵，你成長的速度這麼快，看來我的教課水準也不錯嘛？");
            break;
        case 5:
            qm.sendOk("下次課程再見。在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 6:
            qm.dispose();
    }
}
