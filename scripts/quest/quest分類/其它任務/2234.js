/*
     名字：享受出名冒險家的特權！
     地图：維多利亞港
     描述：104000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2234)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2234).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getCurrentRep() > 500 || qm.getPlayer().getTotalRep() < 2000) {
                qm.sendOk("這對你來說應該並不難，只需要使用名人的特權，消耗掉之前積累的#b聲望值#k就行。");
                qm.dispose();
                return;
            }
            qm.sendNext("你已經成為出色的家族族長，恐怕我已經不能再教你了，祝你以後的旅途順利。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2234).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(30000);
            qm.dispose();
    }
}
