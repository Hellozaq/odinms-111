/*
     名字：尋找回遺失的記憶
     地图：瑞恩村
     描述：140000000
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
            qm.sendNext("嗯？！英雄，你不去修煉，回來瑞恩村裡有其它事情嗎？");
            break;
        case 1:
            qm.sendNextPrev("回憶？英雄的回憶嗎？關於你的記憶，我怎麼可能會知道，只是史書上有一部分記載著關於你的事蹟而已。");
            break;
        case 2:
            qm.sendNextPrev("你只要記得修行，修行，修行，只有這樣，才能恢復過去的能力，再次打敗黑魔法師。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3539).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
