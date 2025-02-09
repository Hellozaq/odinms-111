/*
     名字：女皇的策士那因哈特
     地图：瑞恩村
     描述：140000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21757)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21757).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("你有什麼事嗎？除了想成為騎士的人之外，這裡禁止閒雜人等靠近。嗯……那是什麼？你想把信件交給女皇嗎？說不定會是危險物質。來，請把它給我，我要先看一下。");
            break;
        case 1:
            qm.sendNextPrev("……嗯……上面的內容非常有趣，竟然知道神獸的眼淚……啊，沒什麼，我們會慎重研究的。");
            break;
        case 2:
            qm.sendNextPrevS("黑色翅膀也許正在打這裡的主意。");
            break;
        case 3:
            qm.sendPrev("即使是那樣，也是耶雷弗的事情，和你這樣的外人沒有任何關係。你又怎麼保證自己不是黑色翅膀呢？……謝謝你的情報，再見。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(21757).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032330, -1);
            qm.gainExp(10000);
            qm.dispose();
    }
}
