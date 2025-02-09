/*
     名字：暗夜行者之路
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
            if (status < 1) {
                qm.sendOk("我等待著你的决定。");
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20104)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20104).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("你已經做好選擇了嗎？這將會是一個最終的決定，所以務必慎重。你真的要選擇#b暗夜行者#k嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20104).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1400);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1472061, 1);
            qm.gainItem(2070015, 500);
            qm.getPlayer().gainSP(5, 0);
            qm.sendNext("現在你已經是暗夜行者了，如果你想變得更強，可以在角色屬性窗「S」鍵中提升相應的能力值。如果覺得太難，可以使用#b自動配點#k，這對還不熟悉暗夜行者的人而言非常有用。");
            break;
        case 2:
            qm.sendNext("還有，我給了你一些SP，你可以打開技能選單「K」鍵學習技能。當然，一開始並不是所有技能都可以學習，有些技能必須先學習其它技能後才可以學習。");
            break;
        case 3:
            qm.sendNextPrev("你要記住，和貴族的時候不同，成為暗夜行者之後如果死亡，會損失之前積累的部分經驗值，所以要懂得如何照顧自己。");
            break;
        case 4:
            qm.sendPrev("好了……作為皇家騎士團的騎士，去探索誰都無法到達的黑暗吧。");
            break;
        case 5:
            qm.dispose();
    }
}
