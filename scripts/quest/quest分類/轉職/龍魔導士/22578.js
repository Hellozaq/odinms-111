/*
     名字：對於秘密團體的疑問
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("主人，主人～這次的事情也完成了嗎？這樣就能幫助到楓之谷世界的人嗎？");
            break;
        case 1:
            qm.sendNextPrevS("消滅僵屍的話，一定會對#m211000000#地區起到幫助。");
            break;
        case 2:
            qm.sendNextPrev("嘿嘿，怪物消滅得越多越好。但是那個#t4032471#是什麼啊？");
            break;
        case 3:
            qm.sendNextPrevS("這個嘛？我也不知道。他們是個好團體，應該是用來做什麼好事的吧。");
            break;
        case 4:
            qm.sendNextPrev("是嗎？但是那個團體為什麼要秘密行動呢？這樣的話，做的好事別人就不可能知道了啊？");
            break;
        case 5:
            qm.sendNextPrevS("不是有句話說“左手施惠，不讓右手知道”嗎？");
            break;
        case 6:
            qm.sendNextPrev("左手，右手？那是什麼意思？是要孤立右手嗎？");
            break;
        case 7:
            qm.sendNextPrevS("……不，不是這個意思……是說做好事不應該到處宣揚，要默默地做。");
            break;
        case 8:
            qm.sendNextPrev("嗯？我希望別人能知道，這可真奇怪，太小心謹慎了。雖然很有意思，但我沒辦法理解，主人可以理解嗎？");
            break;
        case 9:
            qm.sendPrevS("我也不是沒有想到……一定是另有深意。不過不管怎樣，反正是好事，有問題的話，等下次接到任務的時候再問吧，問問他們到底是什麼團體。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp", 3);
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(22578).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(50000);
            qm.dispose();
    }
}
