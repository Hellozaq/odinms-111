/*
     名字：煉獄巫師之路
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23011)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23011).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("你要考慮清楚，你真的要選擇煉獄巫師嗎？你覺得這個職業適合你的末日反抗軍之路嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(23011).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23977).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.resetStats(4, 4, 4, 4);
            qm.getPlayer().changeJob(3200);
            qm.gainItem(1382100, 1);
            qm.sendNext("很好！歡迎你正式成為末日反抗軍，從現在開始你就是煉獄巫師了。作為一名戰鬥的法師，希望你能勇敢地沖在最前面和敵人戰鬥。");
            break;
        case 2:
            qm.sendOk("你不能在外面自稱是煉獄巫師，如果被黑色翅膀抓住了的話，就麻煩了。從現在起，你要把我叫做責任老師。你是因為特殊課程才到教室這裡來的。呵呵……特殊課程由我負責，我會好好帶你的。");
            break;
        case 3:
            qm.dispose();
    }
}
