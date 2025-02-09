/*
     名字：吉姆的第三次委託
     地图：墮落城市
     描述：103000000
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
            if (qm.getQuestStatus(2866) < 1) {
                qm.forceStartQuest();
                qm.dispose();
                return;
            }
            qm.sendNext("這個帽子是什麼？");
            break;
        case 1:
            qm.sendNextPrev("這裡怎麼會有帽子…難道是冥界幽靈丟下來的？");
            break;
        case 2:
            qm.sendPrev("嗯…這個帽子看起來很像服務員的帽子…難道是地鐵站服務員把帽子弄丟了..？吉姆那邊待會兒再去報告，還是先去找地鐵站服務員確定一下吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp");
            break;
        case 3:
            qm.forceCompleteQuest();
            qm.gainExp(700);
            qm.dispose();
    }
}
