/*
     名字：對黑魔法師瞭解嗎？
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 10) {
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
            qm.sendNext("你好，歡迎你來到#b#p1101000##k的#m130000000#。我的名字是#b#p1101002##k，目前擔任年輕女皇的策士，我們最好認識一下，因為我們會經常見面。");
            break;
        case 1:
            qm.sendNextPrev("既然你是新来的贵族，有的情况你必须要了解清楚。我们现在所在的這個島叫耶雷弗，多虧了西格諾斯的魔法，所以這個島會像一艘船一樣漂浮在空中，在楓之谷的世界巡邏。然而，現在我們停留在這裡是有原因的。");
            break;
        case 2:
            qm.sendNextPrev("年輕的西格諾斯女皇是楓之谷的統治者，但她不喜歡打破這個世界的寧靜，她喜歡從遠處觀察，以確保楓之谷的世界一切順利。");
            break;
        case 3:
            qm.sendNextPrev("但目前情況並非如此，我們在楓之谷各地都發現了預示著黑魔法師復活的跡象。我們不能讓黑魔法師回來，像過去一樣恐嚇著現在的楓之谷。");
            break;
        case 4:
            qm.sendNextPrev("今天的人們還沒有意識到黑魔法師有多可怕，我們都被現在所享受的寧靜所寵壞了，忘記了楓之谷曾經是多麼的混亂和黑暗。為了保持現有的一切，如果我們不採取行動，否則黑魔法師將再次#b統治#k楓之谷的世界。");
            break;
        case 5:
            qm.sendNextPrev("這就是為什麼這位年輕的女皇決定組建一個勇敢的皇家騎士團的原因。你知道你需要做什麼，對嗎？一定要成為有能力保護楓之谷世界的騎士。");
            break;
        case 6:
            qm.sendNextPrev("我們必須變得更強大，這樣才能在黑魔法師復活時擊敗他，我們的主要目標就是封鎖一切破壞楓之谷的活動。");
            break;
        case 7:
            qm.sendNextPrev("我的解釋到此為止，你有瞭解現在的#b處境#k了嗎？");
            break;
        case 8:
            qm.sendNextPrev("我很高興你清楚我們目前的情況，但是你知道，以你現在的能力，連黑魔法師的爪牙也無法面對，更不用說黑魔法師了，你又將如何#b保護#k楓之谷？");
            break;
        case 9:
            qm.sendNextPrev("雖然你現在已經被接納為貴族，但你還不能被認可為正式的騎士。現在的你只不過是皇家騎士團的學徒，所以你要#b銘記#k這一點。");
            break;
        case 10:
            qm.sendNextPrev("沒有人會在第一天就能開始成為一個強大的騎士，西格諾斯想要的是一個有勇氣的，可以通過嚴格訓練不斷向上激勵成長的騎士。所以，你首先應該在訓練中一點一點累計經驗。");
            break;
        case 11:
            qm.sendYesNo("從現在開始，你要試著學習，如何成為一個勇敢的騎士，從左邊的入口進入修煉森林。在那裡，你會找到修煉教官#b#p1102000##k，他將教你如何變得更強。在你到達Lv10之前，我不想看到你漫無目的地四處遊蕩。你聽到了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 exp");
            break;
        case 12:
            Packages.server.quest.MapleQuest.getInstance(20016).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(380);
            qm.dispose();
    }
}
