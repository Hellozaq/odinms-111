/*
     名字：第一次任務
     地图：訓練房入口
     描述：310010010
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23240)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23240).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你來的正好，我先自我介紹一下，我是吉可穆德，負責管理末日反抗軍的派遣任務，以後請多多指教。");
            break;
        case 1:
            qm.sendAcceptDecline("好了，要我把第一個任務告訴你嗎？你已經成為了末日反抗軍訓練生，我不會給你太難的任務的。準備好了的話，請跟我說。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23240).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23129).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.gainExp(200);
            qm.dispose();
    }
}
