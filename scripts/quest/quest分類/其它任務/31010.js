/*
     名字：競技場調查
     地图：克里塞基地
     描述：200100010
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31010)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(31010).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("好像比想像中的規模還要大？都是一些不好對付的對象，需要更徹底的準備才行。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(31010).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(5000);
            qm.dispose();
    }
}
