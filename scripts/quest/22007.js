/*
     名字：收集雞蛋
     地图：前院
     描述：100030102
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22007)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22007).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendAcceptDecline("哦，雞蛋拿來了嗎？快把蛋給我吧，我來幫你把它孵化。");
            break;
        case 1:
            qm.sendPrev("來，拿著！不知道這到底可以用來幹什麼………\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(22007).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/9/0"));
            qm.gainItem(4032451, -1);
            qm.gainExp(360);
            qm.dispose();
    }
}
