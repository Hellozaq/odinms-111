/*
     名字：尋找赫麗娜
     地图：魔法森林
     描述：101000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24068)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24068).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你來找我，是想成為弓箭手嗎？嗯？好像不是的樣子……熟悉的面孔……你……你……！");
            break;
        case 1:
            qm.sendNextPrev("精靈游侠！");
            break;
        case 2:
            qm.sendPrev("你還活著啊！我就知道你會活下來的！我一直這麼堅信著！堅信…………身為國王的你絕不會死在魔法師的手中！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 2000 exp");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(24068).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/mersedes/0/0"));
            qm.gainExp(2000);
            qm.dispose();
    }
}
