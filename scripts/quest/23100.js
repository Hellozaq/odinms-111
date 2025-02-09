/*
     名字：末日反抗軍的訓練生
     地图：秘密廣場
     描述：310010000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23100)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23100).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("我們又這樣遇見了呢。恭喜你成為末日反抗軍。從一開始你的特殊能力就讓人矚目。我相信赫力泰先生也是在你身上感受到了什麼，才會將你送到這裡來了吧。");
            break;
        case 1:
            qm.sendAcceptDecline("既然你已經成為了末日反抗軍，就得認真修煉，好好升級了吧？別擔心，我會慢慢將末日反抗軍該具備的知識一點點教給你的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23100).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(23128).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.gainExp(100);
            qm.dispose();
    }
}
