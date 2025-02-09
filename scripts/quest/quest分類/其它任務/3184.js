/*
     名字：史卡圖勒的委託
     地图：冰原雪域
     描述：211000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3184)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3184).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("哦，這些正是我需要的尾巴，狩獵的過程一定很順利吧，有沒有遇到其它奇怪的事情呢？");
            break;
        case 1:
            qm.sendPrev("咳！咳！在過一些日子，我想我的身體應該很快就能恢復了，非常感謝你的幫助。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3184).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4000051, -10);
            qm.gainItem(4000052, -10);
            qm.gainExp(5000);
            qm.dispose();
    }
}
