/*
     名字：解凍感情的魔祭司
     地图：魔法提煉師的房間
     描述：270020211
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3514)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3514).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getPlayer().getStat().heal(qm.getPlayer()); //加滿HP
                qm.dispose();
                return;
            }
            qm.sendNext("呵呵~看來你把藥都吃了。怎麼樣？是不是名副其實的特效藥？我研製的藥絕對是萬無一失的！");
            break;
        case 1:
            qm.sendNextPrev("什麼？只要體力完全耗盡就行了？哼哼，誰說的？竟然說這種瞎話騙人……怎麼可能有那種事？哈哈哈哈！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# 意志 50\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 916000 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(3514).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.addPartyTrait("will", 50); //意志
            qm.gainExp(916000);
            qm.dispose();
    }
}
