/*
     名字：尋找孩子2
     地图：發電廠大廳
     描述：310050000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24090)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24090).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("搖了搖昏過去的孩子的身體，不知道怎麼回事，黑魔法師的詛咒已經解開了。身體也變溫暖了……好像在呼吸，只是失去意識了嗎？馬上回村裡去吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(24090).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(101050000), qm.getMap(101050000).getPortal(0));
            qm.gainExp(12000);
            qm.dispose();
    }
}
