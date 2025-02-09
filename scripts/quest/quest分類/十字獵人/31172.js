/*
     名字：歐尼斯龍之王亞普力耶
     地图：燃燒的廢墟
     描述：272000310
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
            qm.sendNext("……你是誰？為什麼會來到這裡。");
            break;
        case 1:
            qm.sendNextPrevS("（哇，真大啊。）我是#b#h0##k。瑪哈讓我向你問好。");
            break;
        case 2:
            qm.sendNextPrev("瑪哈……他怎麼樣了？和狂狼勇士在一起嗎？");
            break;
        case 3:
            qm.sendNextPrevS("#b他帶著狂狼勇士去了瑞恩島。說要在那裡把狂狼勇士封印起來。");
            break;
        case 4:
            qm.sendNextPrev("原來如此。謝謝你救了我的朋友，來至未來世界的朋友。");
            break;
        case 5:
            qm.sendNextPrevS("#b…..！！你是怎麼知道的？");
            break;
        case 6:
            qm.sendNextPrev("我可是歐尼斯龍之王。除了狂狼勇士之外，你還可以幫助我們所有人。我和普力特、狂狼勇士和瑪哈，還有精靈遊俠等等，終於突破了艱難險阻，站在了黑魔法師面前。雖然誰也沒見過黑魔法師的本體，但從他身上感覺到的強烈的邪惡氣息，就能知道他就是黑魔法師。");
            break;
        case 7:
            qm.sendNextPrev("開始和黑魔法師戰鬥時，他的壓倒性的魔力已經喪失了大半，因為曾經是黒魔法師部下的惡廣殺手剛剛和黑魔法師展開了殊死決戰。惡魔殺手無法原諒殺死自己家人的黑魔法師。我們抓住了這個機會。");
            break;
        case 8:
            qm.sendNextPrev("即使是這樣，黑魔法師仍然很強。身經百戰的英雄們如果不是齊心協力的話，是絕對不可能把他打倒的。最後我們全都受了重傷，好不容易才把他封印了。");
            break;
        case 9:
            qm.sendNextPrevS("#b聽瑪哈說，黑魔法師在被封印的瞬間施加了強力詛咒……");
            break;
        case 10:
            qm.sendNextPrev("沒錯。黑魔法師利用封印瞬間的那股力量，對包括我和普力特在內的所有人施加了詛咒。這個詛咒非常強烈，所以我只能代替普力特一個人承受了詛咒，囙此慢慢地被冰凍了起來。");
            break;
        case 11:
            qm.sendNextPrevS("#b沒有其它解開詛咒的方法嗎？");
            break;
        case 12:
            qm.sendNextPrev("如果解開黑魔法師的封印，詛咒應該就會解開。但是這樣的事情絕不會發生。我和普力特設計的封印，會把他永遠束縛在那裡。我沒有力氣說更多的話，你能過會兒再來和我說話嗎？我得休息一下。");
            break;
        case 13:
            Packages.server.quest.MapleQuest.getInstance(31172).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
