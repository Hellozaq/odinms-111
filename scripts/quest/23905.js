/*
     名字：可疑的村莊
     地图：埃德爾斯坦
     描述：310000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23905)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23905).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("見過#p2152016#了吧。跟你說了吧？不會是愉快的會面……帕潘在#b<監視者>#k中還算是友好的性格。");
            break;
        case 1:
            qm.sendPrev("看過你就知道了…我們村被他們黑色翅膀控制著。當然…不是居民們希望的控制。人們不喜歡他們。不，而是憎恨。因此，才會懷疑身為外地人的你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23905).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(7000);
            qm.dispose();
    }
}
