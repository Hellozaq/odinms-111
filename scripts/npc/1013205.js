/*
     名字：亞普力耶
     地图：陣地後面
     描述：900030000
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22601)).getStatus() > 0) {
                cm.sendOk("主人！我的希望全部都在你身上了，你一定要活下去。");
                cm.dispose();
                return;
            }
            cm.sendNext("你沒事吧，主人？你看上去好像很累……");
            break;
        case 1:
            cm.sendNextPrevS("#b我沒事，站在最前面戰鬥的狂狼勇士好像受了一點傷，其它的人都沒事，你沒事吧？");
            break;
        case 2:
            cm.sendNextPrev("沒事，戰鬥對我來說沒有任何問題。");
            break;
        case 3:
            cm.sendNextPrevS("#b我擔心的不是你的身體，你的同族已經全部……");
            break;
        case 4:
            cm.sendNextPrev("…………");
            break;
        case 5:
            cm.sendNextPrevS("#b對不起，我不應該把你拖入戰鬥，我應該讓你跟隨黑魔法師的，那樣的話……歐尼斯龍就可以繼續存在下去……！");
            break;
        case 6:
            cm.sendNextPrev("別說傻話，主人，我們是自願參加戰鬥的，不是你的錯。");
            break;
        case 7:
            cm.sendNextPrevS("#b但是……！");
            break;
        case 8:
            cm.sendNextPrev("雖然黑魔法師覬覦我們的力量……但我們絕不會站在黑魔法師一邊的，我們歐尼斯龍，是和擁有強大靈魂的人類相互吸引的種族，不可能和黑魔法師之類的邪惡的人待在一起。");
            break;
        case 9:
            cm.sendNextPrev("所以你用不著道歉，主人！！不，普力特，即使我們在戰鬥中全部死去，那也是我們歐尼斯龍自己的選擇，希望你能尊重我們的選擇。");
            break;
        case 10:
            cm.sendNextPrevS("#b亞普力耶……");
            break;
        case 11:
            cm.sendNextPrev("但是我有個請求，在和黑魔法師的最後戰鬥中……如果我在戰鬥中死去，請保護好我的孩子，它還要很久才會醒來……你是我最信任的人。");
            break;
        case 12:
            cm.sendNextPrevS("#b別說這種話，亞普力耶，你要活下去，保護自己的孩子！");
            break;
        case 13:
            cm.sendNextPrev("不知道我們之中誰會活下去，所以我才會這樣拜託你，你能答應我嗎，主人？");
            break;
        case 14:
            cm.sendNextPrevS("#b明白了，我……答應你，但是你也要答應我，一定要活下來。");
            break;
        case 15:
            cm.sendNextPrev("當然，主人。");
            break;
        case 16:
            cm.sendPrevS("#b絕對不要為了我而犧牲……", 3);
            break;
        case 17:
            Packages.server.quest.MapleQuest.getInstance(22601).forceStart(cm.getPlayer(), 0, 1);
            cm.dispose();
    }
}
