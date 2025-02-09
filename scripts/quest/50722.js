/*
     名字：飛向天空！
     地图：天空的渡口
     描述：240080000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(50722)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(50722).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("準備了古代龍鱗片嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s10001142# #q10001142# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp");
            break;
        case 1:
            y = qm.getPlayer().getJob();
            Packages.server.quest.MapleQuest.getInstance(50722).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(y < 1000 ? 1142 : y < 2000 ? 10001142 : y < 2200 ? 20001142 : y < 2300 ? 20011142 : y < 2400 ? 20021142 : y < 3200 ? 30011142 : 30001142), 1, 1, -1);
            qm.gainItem(4032969, -1);
            qm.gainExp(70000);
            qm.dispose();
    }
}
