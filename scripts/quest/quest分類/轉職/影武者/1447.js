/*
     名字：隱忍
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1447)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1447).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你順利通過了考試……很不錯嘛，雖然異次元世界裡的達克魯只是分身，但我沒想到你能戰勝他。達克魯讓我通過神聖的石頭召喚分身，我還說幹嘛興師動眾的，看來達克魯的話沒錯。");
            break;
        case 1:
            qm.sendYesNo("和真正的盗贼達克魯的戰鬥，會讓你變成了真正的影武者……雖然你自己還沒感覺到嗎？現在剩下的事情就只有升職了，做好成為更强的影武者——隱忍的準備了嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1447).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(433);
            qm.gainItem(4031059, -1);
            qm.sendOk("從現在起你已經成為了一名隱忍，短劍的大師，真正的隱忍，去盡情施展你的力量吧。");
            break;
        case 3:
            qm.dispose();
    }
}
