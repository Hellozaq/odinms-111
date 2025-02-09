/*
     名字：找回失去的回憶
     地图：惡魔殺手
     描述：惡魔殺手
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
            qm.sendNextS("回憶的話……到底是說何時的記憶呢？決定跟隨黑魔法師的時候？與黑魔法師決鬥的時候？還是說最近在礦山醒來的時候呢？", 3);
            break;
        case 1:
            qm.sendNextPrevS("通常提到回憶的話，一般都是說快樂的事情吧。我有美好的回憶嗎？好吧。在遇到黑魔法師之前，和家人一起度過的時期似乎是最快樂的日子。媽媽…還有德米安。", 3);
            break;
        case 2:
            qm.sendNextPrevS("話說跟莫斯提馬修煉的時候也很開心。那樣的日子會再次回到我身邊嗎？", 3);
            break;
        case 3:
            qm.sendNextPrevS("(回想起幸福的記憶，讓你對生活有了新的嚮往。)", 3);
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(3544).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
