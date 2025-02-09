/*
     名字：早餐是三明治
     地图：前院
     描述：100030102
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
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
            qm.sendNext("你拿飯給獵犬吃了嗎？你也來吃早餐，今天的早餐是#v2022620#手工三明治，我有拿出來了。實際上如果你不幫忙拿東西給獵犬吃，那我也不打算讓你吃早餐。");
            break;
        case 1:
            qm.sendAcceptDecline("來，先把手工三明治吃掉，吃完之後去找媽媽，她有事情要交代你做。");
            break;
        case 2:
            qm.sendPrevS("想說的話？總之先吃了手工三明治再回家去。 ", 3);
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22002).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/3/0"));
            qm.gainItem(2022620, qm.getPlayer().itemQuantity(2022620) ? 0 : 1);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 0) {
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
            qm.sendAcceptDecline("吃過早餐了嗎？那麼可以幫媽媽一個忙嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1003028# #t1003028# 1 \r\n#v2022621# #t2022621# 5 \r\n#v2022622# #t2022622# 5 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(22002).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/4/0"));
            qm.gainItem(1003028, 1);
            qm.gainItem(2022621, 5);
            qm.gainItem(2022622, 5);
            qm.gainExp(60);
            qm.dispose();
    }
}
