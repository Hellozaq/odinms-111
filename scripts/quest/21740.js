/*
     名字：被搶走的天空之城封印石
     地图：特魯的情報商店
     描述：104000004
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
            qm.sendNext("你回來了，英雄。在天空之城的事情辦得怎麼樣，確實是和黑色翅膀有關吧，為什麼表情這麼凝重？說來聽聽。");
            break;
        case 1:
            qm.sendNextPrevS("講述有關天空之城的#b封印石#k的事情。");
            break;
        case 2:
            qm.sendNextPrev("嗯！天空之城也有封印石啊……這倒是很重要的一個情報。雖說被搶走了很可惜……啊，我倒不是在怪你。沒想到黑色翅膀這次是有備而來啊。");
            break;
        case 3:
            qm.sendNextPrevS("…………");
            break;
        case 4:
            qm.sendNextPrev("振作精神！…對，就是這樣。莉琳這次又解讀出來了#b新技能#k。你去瑞恩島見見莉琳吧，正好連天空之城的消息也一起帶過去。");
            break;
        case 5:
            qm.sendPrev("莉琳也是事件的相關人，而且對於英雄曾經生活過的那個年代，沒有人比莉琳更瞭解，所以應該經常和莉琳互通情報，有事情最好也找她商量。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21740).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

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
            qm.sendNext("啊呀，很久不見了。這段時間修煉得還好吧？正好我發現了新的技能想叫你回來呢……你回來的正是時候！");
            break;
        case 1:
            qm.sendNextPrevS("對#p1201000#講述有關天空之城封印石的事情。");
            break;
        case 2:
            qm.sendNextPrev("天空之城封印石啊……原來如此，這下可以肯定黑色翅膀的目標果然是封印石，而且封印石不止一個，這是一個很重要的情報。");
            break;
        case 3:
            qm.sendNextPrevS("…不過封印石被搶走了……");
            break;
        case 4:
            qm.sendNextPrev("黑色翅膀從很早之前就已經開始做準備了。這麼看來，我們能得到維多利亞島的封印石，已經是萬幸了。現在對你而言，學習技能更重要。");
            break;
        case 5:
            qm.sendPrev("現在最重要的就是讓你立刻變得強大起來。關於封印石，有我和特魯關注著呢，你還是專心訓練吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7604 exp");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21740).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(7604);
            qm.dispose();
    }
}
