/*
     名字：未甦醒的他們
     地图：櫻花處
     描述：101050000
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
            qm.sendNext("長老們的純白淨化不起作用的原因，想來想去只有一個。請冷靜地聽我說。#b黑魔法師的封印已經變弱，或者已經解開#k了。");
            break;
        case 1:
            qm.sendNextPrev("想想其實很簡單，從國王陛下醒來的事情，可以看到黑魔法師的詛咒出現了裂痕。而且通過不斷的修煉，國王的力量正在逐漸恢復。");
            break;
        case 2:
            qm.sendNextPrev("那樣的話，我們種族的力量也會逐漸變强，但是其他人還是沒能戰勝詛咒，好像被什麼阻擋了一樣……");
            break;
        case 3:
            qm.sendNextPrev("結論只有一個，黑魔法師的詛咒雖然出現了裂縫，但好像正在#b變强#k。");
            break;
        case 4:
            qm.sendNextPrev("黑魔法師的詛咒變强，說明黑魔法師的封印正在變弱，他的力量正在回到枫之谷世界……只能這麼解釋。");
            break;
        case 5:
            qm.sendPrev("結論是，歷經了數百年時間的枫之谷世界陷入了危機之中，危機的製造者正是黑魔法師。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1000 exp");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(24066).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(1000);
            qm.dispose();
    }
}
