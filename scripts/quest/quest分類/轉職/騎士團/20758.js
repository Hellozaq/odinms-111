/*
     名字：邪惡的靈魂
     地图：耶雷弗
     描述：130000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20758)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(20758).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("找到#b#t4033117##k了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20758).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(10000202), qm.getPlayer().getSkillLevel(10000202) < 6 ? qm.getPlayer().getSkillLevel(10000202) + 1 : 6, 6, -1);
            qm.gainItem(4033117, -1);
            qm.dispose();
    }
}
