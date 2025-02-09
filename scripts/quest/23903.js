/*
     名字：可以幫助艾德斯塔嗎？
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23903)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23903).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("燈泡都找來了，太謝謝了！現在學校不再缺燈泡了，竟然做到這一步…西格諾斯的騎士團還會有你這樣的人，我一定會告訴村民的。");
            break;
        case 1:
            qm.sendPrev("這個村子被黑色翅膀佔領已有幾年…人們變得越來越刻薄，但如果你是正直的人，還是會相信你的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3500 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23903).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4000603, -40);
            qm.gainExp(3500);
            qm.dispose();
    }
}
