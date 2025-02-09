/*
     名字：魔導士(火， 毒)
     地图：長老公館
     描述：211000001
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1435)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1435).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("異次元世界裡的漢斯怎麼樣……呵呵，這就是神聖的石頭所擁有的力量，可以在異次元召喚出分身戰鬥的力量，你得謝謝漢斯，他為你做了這麼細緻的準備…..");
            break;
        case 1:
            qm.sendYesNo("通過和真正的魔法師漢斯的戰鬥，你也獲得了成為真正魔法師的資格……剩下的事情就是升職了，你想成為更強的魔法師——魔導士嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1435).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(211);
            qm.gainItem(4031059, -1);
            qm.sendOk("從現在起你已經成為了一名魔導士，火和毒的大師，真正的魔導士，去盡情施展你的力量吧。");
            break;
        case 3:
            qm.dispose();
    }
}
