/*
     名字：破風使者之路
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20103)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20103).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("你已經做好選擇了嗎？這將會是一個最終的決定，慎重可以使人變得賢明，你真的要選擇#b破風使者#k嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20103).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(1300);
            qm.resetStats(4, 4, 4, 4);
            qm.gainItem(1452051, 1);
            qm.gainItem(2060000, 500);
            qm.getPlayer().gainSP(5, 0);
            qm.sendNext("現在你已經是破風使者了，如果你想變得更強，可以在角色屬性窗「S」鍵中提升相應的能力值。如果覺得太難，使用#b自動配點#k功能，可以使屬性的分配變得更簡單。");
            break;
        case 2:
            qm.sendNext("我給你分配了一些SP，你可以在技能選單「K」鍵中學習技能。有些技能需要先學習其它技能後才能學習，所以在學習技能的時候需要慎重考慮。");
            break;
        case 3:
            qm.sendNextPrev("你要記住，和貴族的時候不同，成為破風使者之後如果死亡，會損失之前積累的部分經驗值，所以務必要小心。");
            break;
        case 4:
            qm.sendPrev("好了……作為皇家騎士團的一員，希望你能盡忠職守…為自己的榮譽及保護我們的楓之谷世界而努力吧。");
            break;
        case 5:
            qm.dispose();
    }
}
