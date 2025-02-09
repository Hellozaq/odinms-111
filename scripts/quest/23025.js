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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23025)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23025).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("這就是那個黑色翅膀的報告啊。果然……只要有了這個文件，就可以對末日反抗軍今後的方向作出調整了，幹得好！");
            break;
        case 1:
            qm.sendNextPrev("這個任務原來不是你的任務，是我特意交給你的。那個黑色翅膀成員……你一定很想親手把他解決掉吧？我是希望你為了復仇，可以把任務完成得更好。");
            break;
        case 2:
            qm.sendNextPrev("但是我沒想到你能完成得這麼乾淨利索。真是了不起。你的成長速度總是超出我的預測。讓我感覺自己的付出很有意義。");
            break;
        case 3:
            qm.sendAcceptDecline("我本以為是很久以後的事情……但看到你成長得這麼快，我就沒有必要猶豫了。我馬上讓你進入下一階段。讓你變成和以前完全不同的、可以自由地操縱更多機械的強大的機甲戰神。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(23025).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3510);
            qm.gainItem(4032739, -1);
            qm.sendNext("我已經讓你轉職了，與此同時，我也把我的知識和技能都傳授給你了。此外，我還把你之前使用的麥林彈提升了。所以現在的你已經不是過去的你了。是個更加進化的機甲戰神，這就是你，請你好好享受新獲得的力量吧。");
            break;
        case 5:
            qm.sendOk("下次課程再見。希望你能在此期間好好展現末日反抗軍的實力。");
            break;
        case 6:
            qm.dispose();
    }
}
