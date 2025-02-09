/*
     名字：助理
     地图：耶雷弗
     描述：130000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20746)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20746).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("騎士團的成員？是那因哈特派你過來的嗎？怎麼看都像一個不入流的騎士。");
            break;
        case 1:
            qm.sendPrev("如果你想瞭解這裡的情况，就必須要先協助我的調查，希望你能做好這件事情！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20746).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(50000);
            qm.dispose();
    }
}
