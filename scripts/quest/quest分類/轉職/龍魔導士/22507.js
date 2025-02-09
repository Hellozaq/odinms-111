/*
     名字：龍魔導士是？
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 14) {
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
            qm.sendNext("主人和我真是心靈相通！主人！當你變得更強壯時，我也變得更強。當我變得更強壯時，你可以用我的力量！這是我們的協定，我知道我選了一個好主人！");
            break;
        case 1:
            qm.sendNextPrevS("我懂了，但是我們到底是怎麼簽訂協議的？");
            break;
        case 2:
            qm.sendNextPrev("嗯……我也不知道。我不記得我還是蛋的時候的事情了。就像是夢中的事情一樣，只能隱隱約約地記得。在一片充滿迷霧的森林裡，主人向我走來。看到我之後，主人被嚇了一跳。我叫了主人。");
            break;
        case 3:
            qm.sendNextPrevS("哦，和我的夢很相似。難道我們是在夢中見面的嗎？我在夢中見到的巨大的龍，就是#p1013000#？");
            break;
        case 4:
            qm.sendNextPrev("主人和我的靈魂非常吻合。我一眼就知道，主人可以和我簽訂契約。所以我最終和主人簽訂了契約。主人付出了契約的代價。");
            break;
        case 5:
            qm.sendNextPrevS("我付出了代價？");
            break;
        case 6:
            qm.sendNextPrev("你不記得了嗎？當你認出我並撫摸我的時候？這是我設定的一個條件。當你觸摸我的蛋的時候，你和我在精神上成為一體。");
            break;
        case 7:
            qm.sendNextPrevS("…精神一體？");
            break;
        case 8:
            qm.sendNextPrev("對！精神契約！你和我有不同的身體，但我們分享一種精神。這就是為什麽當我變得更強時，你變得更強，反之亦然！棒極了，對吧？至少，我想是這樣。");
            break;
        case 9:
            qm.sendNextPrevS("我不知道你在說什麽，但聽起來挺了不起的。");
            break;
        case 10:
            qm.sendNextPrev("當然很了不起了！現在你不用為怪物擔心了，因為你現在有了我。我會保護你的，主人！來，讓我們試驗一下吧！");
            break;
        case 11:
            qm.sendNextPrevS("但是……這裡是平靜的農場，沒有怪物。");
            break;
        case 12:
            qm.sendNextPrev("什麽？這沒意思！你不喜歡冒險嗎，主人？為你的人民戰鬥怪物，戰勝邪惡，拯救無辜者，以及所有這些？你不喜歡那種事嗎？");
            break;
        case 13:
            qm.sendNextPrevS("這不是我五年計劃的一部分。我只是開玩笑，但說真的，我是一個農民的孩子…");
            break;
        case 14:
            qm.sendAcceptDecline("嗯，讓我告訴你吧，龍主人不可能過上平靜的生活，我會有很多機會來證明我的技能。相信我，我們的人生將是一次偉大的冒險，答應我你會和我在一起，好嗎？");
            break;
        case 15:
            qm.sendNext("嘿嘿嘿，那以後就拜託你了，主人。");
            break;
        case 16:
            qm.sendNextPrevS("稀裡糊塗地成為了龍魔導士，開始和龍一起生活。也許有一天，會和它一起出去冒險。");
            break;
        case 17:
            qm.sendPrevS("但是現在必須先完成眼前的事情。爸爸說有話要跟我說，去見見他吧。", 3);
            break;
        case 18:
            Packages.server.quest.MapleQuest.getInstance(22507).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
