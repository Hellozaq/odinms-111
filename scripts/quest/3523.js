/*
     名字：找回遺失的記憶
     地图：勇士聖殿
     描述：102000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendNext("……從這股強大的殺氣來看，你應該是位強大的劍士，你的名字是……？呵呵！我好像對這個名字有印象。在很久之前找到我，說要成為劍士的青澀的一批初心者中，好像就有這個名字。");
            break;
        case 1:
            qm.sendNextPrev("沒想到你已經變成了強大的劍士！現在就算是武術教練，應該也不敢說一定能贏你了吧？真了不起……嗯，我就知道你會成為一名出色的劍士。");
            break;
        case 2:
            qm.sendNextPrev("繼續努力，作為把你帶上劍士之路的人，我確信，你一定可以變成更強大的劍士……");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3523).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
