/*
     名字：神槍手
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1446)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1446).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你順利通過了考試……很不錯嘛？在那個地方見到卡伊琳，是不是很吃驚？雖然異次元世界裡的卡伊琳只是分身，但是應該也很强……卡伊琳把你託付給我，看來她沒有看錯人。");
            break;
        case 1:
            qm.sendYesNo("和真正的海盜卡伊琳的戰鬥，使你成為了真正的海盜，感覺到了嗎？現在剩下的就是升職了，做好成為更强的海盜——神槍手的準備了嗎？");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1446).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(521);
            qm.gainItem(4031059, -1);
            qm.sendOk("從現在起你已經成為了一名神槍手，槍的大師，真正的神槍手，去盡情施展你的力量吧。");
            break;
        case 3:
            qm.dispose();
    }
}
