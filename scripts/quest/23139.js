/*
     名字：取得解毒草
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23139)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23139).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("羽毛草都弄好了嗎？那……我來查查看吧。");
            break;
        case 1:
            qm.sendNextPrev("……數量還差很多呢，用這些只能做一半的解毒藥……");
            break;
        case 2:
            qm.sendNextPrevS("我聽薩比特拉瑪說，有來自耶雷弗的商人在出售羽毛草……你要去那邊看看嗎？");
            break;
        case 3:
            qm.sendNextPrev("……耶雷弗？是皇家騎士團的那個島嗎？……不，沒有那個必要。我不想向他們請求幫助。中毒的同伴們一定也是這麼想的。");
            break;
        case 4:
            qm.sendNextPrev("你知道嗎？皇家騎士團違背了和我們的約定。如果不是這樣的話，埃德爾斯坦也許就能擺脫黑色翅膀的魔掌……一群偽善的人。");
            break;
        case 5:
            qm.sendPrev("必須想辦法用這些羽毛草製作解毒劑，或者尋找可以代替羽毛草的其它藥草……謝謝你的幫助……#h0#\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3200 exp");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(23139).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4033093, -1);
            qm.gainExp(3200);
            qm.dispose();
    }
}
