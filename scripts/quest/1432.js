/*
     名字：騎士
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1432)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1432).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("呵呵，和異次元世界裡的武術教練戰鬥，感覺如何？那是神聖的石頭擁有的驚人力量所展現的神秘幻象……武術教練同意將你引向更強的劍士之路，所以才會現身。");
            break;
        case 1:
            qm.sendYesNo("和真正的劍士武術教練戰鬥，你獲得了成為真正劍士的資格，剩下的事情，就是升職成騎士了……好的，做好接受新力量的準備了嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1432).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(121);
            qm.gainItem(4031059, -1);
            qm.sendOk("從現在起你是騎士，劍和鈍器的大師，真正的戰士，去盡情施展你的力量吧。");
            break;
        case 3:
            qm.dispose();
    }
}
