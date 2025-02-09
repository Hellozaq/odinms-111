/*
     名字：精靈的朋友
     地图：櫻花處
     描述：101050000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24031)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24031).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendSimple("啊……哎呀……真是好久沒吃到了。精靈們製作的食物……讓我想起了過去。你說要去和黑魔法師戰鬥，我沒能跟著去……你不知道我有多後悔。\r\n#L0##b我不是答應你會回來的嗎？#l\n#k");
            break;
        case 1:
            qm.sendSimple("沒錯。正是因為你的話，我在變得荒涼的楓之谷世界等待精靈們的歸來。我相信你們一定會回來，向我伸出友誼之手……我想再次和你一起，在楓之谷世界奔跑……\r\n#L0##b還……還不行。楓之谷世界還沒有恢復和平。戰鬥還沒結束，我不想把你捲進來。#p1033240#，你能再等等嗎？#l\n#k");
            break;
        case 2:
            qm.sendAcceptDecline("不能再等了，精靈遊俠……\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s20021160# #q20021160# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7700 exp");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(24031).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(20021160), 1, 1, -1);
            qm.gainItem(4032977, -1);
            qm.gainExp(7700);
            qm.dispose();
    }
}
