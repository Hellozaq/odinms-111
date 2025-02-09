/*
     名字：菲利屋司的請託
     地图：櫻花處
     描述：910150001
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24002)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24002).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("也許這是我們的幸運。因為黑魔法師的詛咒，我們能暫時從變得荒涼的楓之谷世界脫離出來。我們回來的時候，這片土地會變成什麼樣子呢……");
            break;
        case 1:
            qm.sendPrev("想到這個……詛咒好像並不全是壞事……希望你……做個好夢……");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24002).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
