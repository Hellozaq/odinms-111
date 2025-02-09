/*
     名字：合作的必要性
     地图：櫻花處
     描述：910150001
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
            qm.sendNext("還好這次守住了村子……要是下次再受到攻擊，可能會有危險。長老們和你都還沒恢復過去的力量。");
            break;
        case 1:
            qm.sendNextPrevS("…銀檞之槍暫時最好放在你這裡，赫麗娜。放在村裡的話，要是受到攻擊，被他們搶走，那就糟了，我相信你一定可以保護好它……");
            break;
        case 2:
            qm.sendNextPrev("但是村子誰來保護呢……");
            break;
        case 3:
            qm.sendNextPrevS("#b必須想想其它辦法，我也可以一直在村裡守著。");
            break;
        case 4:
            qm.sendNextPrev("精靈遊俠，你得繼續修煉……你看這個辦法怎麼樣？把這件事告訴在最前線和黑色翅膀戰鬥的皇家騎士團，向他們請求協助。");
            break;
        case 5:
            qm.sendNextPrevS("#b皇家騎士團？是現在的女皇手下的騎士嗎？");
            break;
        case 6:
            qm.sendNextPrev("是的，和以前不同，那裡聚集了大量騎士，他們和我們有著相同的敵人，如果告訴他們我們的情況，他們肯定會幫我們的。");
            break;
        case 7:
            qm.sendNextPrev("那我回弓箭手村去給皇家騎士團所在的耶雷弗寫封信，精靈遊俠，你能在村裡等待他們派人來嗎？");
            break;
        case 8:
            qm.sendNextPrevS("#b不，我要到耶雷弗去見見他們的女皇，我想親眼確認一下她是不是可以信任的人。");
            break;
        case 9:
            qm.sendPrev("精靈遊俠，你果然還是沒變……雖然是國王，但總是喜歡自己親自處理事情……那我會給他們寫封信，讓他們做好迎接你的準備。");
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(24073).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
