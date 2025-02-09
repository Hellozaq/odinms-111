/*
     名字：抓住影子武士！
     地图：武陵道場後路
     描述：925040000
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("沒想到在數百年的歲月之後，英雄的後裔又重新出現了……也不知道對楓之谷是福還是禍……怎樣都無所謂了。好吧……我告訴你有關#b桃花仙境封印石#k的事情。");
            break;
        case 1:
            qm.sendNextPrev("桃花仙境的封印石所在的地方叫做封印的寺院。那裡的入口被隱藏在桃花仙境寺院的修煉場內。如果你能從修煉場中找出刻有入口字樣的柱子，就可以進入封印的寺院了。暗號是#b道可道非常道#k");
            break;
        case 2:
            qm.sendNextPrev("說不定那個叫影子武士的人已經到了封印的寺院。不過，他應該還沒有把東西偷走。不知道是不是在等我……不過，相比我而言，英雄的後裔去會會影子武士可能更合適呢。");
            break;
        case 3:
            qm.sendAcceptDecline("希望你能竭盡全力封鎖影子武士。英雄的後裔啊……繼承英雄過去的光輝事業吧。");
            break;
        case 4:
            qm.sendPrevS("他似乎誤以為我是英雄的後裔了。他說讓我繼承英雄過去的光輝事業……是什麼意思呢？先封鎖影子武士，然後再問他好了。", 3);
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(21747).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("成功打敗了影子武士嗎？表情怎麼這麼凝重……難道說你失敗了……");
            break;
        case 1:
            qm.sendNextPrevS("描述了與#o9300351#戰鬥的經過。");
            break;
        case 2:
            qm.sendNextPrev("原來是這樣，桃花仙境的封印石最終還是被搶走了……很遺憾，不過也沒辦法。我現在也不明白英雄們為什麼要把封印石交給#m250000000#。");
            break;
        case 3:
            qm.sendNextPrevS("你說英雄把封印石交給了桃花仙境？");
            break;
        case 4:
            qm.sendNextPrev("是的……你還不知道嗎？很久很久以前，英雄們把封印石交給了桃花仙境。長老製作了#b#m925040100##k並慎重看管起來。");
            break;
        case 5:
            qm.sendNextPrev("這些事情，現在很少有人知道了。事實上，封印石沒有了，對桃花仙境而言到底有沒有影響，誰也不知道。只不過因為是英雄交給我們保管的東西，所以我們才看得很重。");
            break;
        case 6:
            qm.sendNextPrev("把英雄交給我們的東西給弄丟了，雖說很可惜，但有英雄的後裔在，我們也覺得心裡踏實一些。請繼續完成英雄未盡的事業。");
            break;
        case 7:
            qm.sendPrevS("#m250000000#封印石也被搶走了……得找#p1002104#問問。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16000 exp", 3);
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(21747).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(16000);
            qm.dispose();
    }
}
