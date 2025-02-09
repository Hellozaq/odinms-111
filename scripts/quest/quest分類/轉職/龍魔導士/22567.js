/*
     名字：秘密團體第一個任務
     地图：天空之塔&amp;lt;隱密的房間&gt;
     描述：200080601
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22567)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22567).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNextS("拿出#p2012034#，把收集到的成長促進劑放了進去。", 3);
            break;
        case 1:
            qm.sendNextPrevS("將#p2012034#推進孔內，使其變回了原來的狀態。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15484 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(22567).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032468, -10);
            qm.gainExp(15484);
            qm.sendNextS("唉……因為是臨時成員，我還以為會很容易呢，沒想到比我想像的難得多，不過感覺像個秘密團體，還挺有意思的，你說呢？", 3);
            break;
        case 3:
            qm.sendNext("很有趣吧，主人！！但是這個團體到底要把成長促進劑用在什麼地方呢？", 1013000);
            break;
        case 4:
            qm.sendNextPrevS("這，這個麼，這個藥是用在植物上的，不知道對動物有沒有用………");
            break;
        case 5:
            qm.sendNextPrev("嗯？等等，主人，你說我是動物？", 1013000);
            break;
        case 6:
            qm.sendNextPrevS("人類不也是動物嗎？哈哈哈！");
            break;
        case 7:
            qm.sendNextPrev("不過我還是很難接受……哼，好吧，這次就算了。", 1013000);
            break;
        case 8:
            qm.sendNextPrevS("他們也許是想用成長促進劑來促進農作物的生長吧？農場經常會在地裏施肥，提高糧食的產量。");
            break;
        case 9:
            qm.sendNextPrev("哦，是嗎？糧食多了的話，就沒人挨餓了，那很好啊！那是個做好事的團體嗎？", 1013000);
            break;
        case 10:
            qm.sendPrevS("嗯，好像是這樣的。", 3);
            break;
        case 11:
            qm.dispose();
    }
}
