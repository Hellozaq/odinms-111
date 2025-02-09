/*
     名字：利琳的反應
     地图：裡恩
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
            qm.sendNext("什麼？最近在收集封印石的是一群叫做黑色翅膀的人嗎，你去那裡獲取的情報？");
            break;
        case 1:
            qm.sendNextPrev("是這樣嗎？你有清楚他們的目的是什麼嗎？而且最主要的就是，黑色翅膀所在的埃德爾斯坦區域，市民都被嚴格管轄，到處都是監視者。");
            break;
        case 2:
            qm.sendNextPrev("沒想到，在這樣的環境之下，還會有不少人可以鼓起勇氣，秘密的進行鬥爭呢，實在是太好了！");
            break;
        case 3:
            qm.sendPrev("如果這個情況屬實，那麼反抗黑魔法師的隊伍將會越來越強大。狂狼勇士！你也要繼續收集情報哦，不能偷懶！");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(23907).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
