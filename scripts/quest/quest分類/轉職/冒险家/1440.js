/*
     名字：狙擊手
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1440)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1440).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("見到了異次元世界裡的赫麗娜，感覺如何？是不是很吃驚？這就是神聖的石頭所擁有的驚人力量，可以在異次元召喚出分身戰鬥的力量，據說這是赫麗娜特地為你準備的。");
            break;
        case 1:
            qm.sendYesNo("和真正的弓箭手赫麗娜的戰鬥，會把你引上真正的弓箭手之路……你感覺到自己成長了嗎？現在剩下的事情就是升職了，做好成為更強的弓箭手——狙擊手的準備了嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1440).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(321);
            qm.gainItem(4031059, -1);
            qm.sendOk("從現在起你已經成為了一名狙擊手，弩的大師，真正的狙擊手，去盡情施展你的力量吧。");
            break;
        case 3:
            qm.dispose();
    }
}
