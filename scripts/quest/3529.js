/*
     名字：找回遺失的記憶
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("有什麼事嗎？#h0#？最近的派遣任務有完成嗎？");
            break;
        case 1:
            qm.sendNextPrev("回憶？不知道我們之間有什麼回憶……我還記得你第一次來這裡時的樣子。雖然只是個青澀的貴族，卻說要去對抗黑魔法師，真讓人擔心。");
            break;
        case 2:
            qm.sendNextPrev("是這樣嗎？如果那也是回憶的話，就算是回憶吧……");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3529).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
