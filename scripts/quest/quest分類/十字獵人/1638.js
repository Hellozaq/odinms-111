/*
     名字：[十字獵人]時間的神官阿卡伊農
     地图：補給品倉庫
     描述：931050500
 */

var status = -1;

function end(mode, type, selection) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1638)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1638).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("阿卡伊農好像回來了！我在時間神殿看到他了。但是不知道他現在去了哪裡……");
            break;
        case 1:
            qm.sendNextPrevS("#b阿卡伊農？他到底是誰？");
            break;
        case 2:
            qm.sendNextPrev("阿卡伊農……他是黑魔法師軍團長的一員，黑魔法師被封印後，他就躲藏起來了。", 9073011);
            break;
        case 3:
            qm.sendNextPrevS("#b軍團長？那麼他的出現不就意味著黑魔法師回來了嗎？");
            break;
        case 4:
            qm.sendPrev("那個還不太清楚，總之現在正在發生一些奇怪的事情。重現的阿卡伊農和時空門……這之間肯定有什麼聯系。阿卡伊農曾做過黑魔法師的策士，時空門的目的應該不單純是想讓楓之谷世界陷入混亂。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp", 9073011);
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(1638).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(70000);
            qm.dispose();
    }
}
