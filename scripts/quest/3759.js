/*
     名字：飛向天空2
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3759)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3759).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("拿到了#b#t4032531##k，可以開始製作秘藥了。");
            break;
        case 1:
            y = qm.getPlayer().getJob();
            Packages.server.quest.MapleQuest.getInstance(3759).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(y < 1000 ? 1026 : y < 2000 ? 10001026 : y < 2200 ? 20001026 : y < 2300 ? 20011026 : y < 2400 ? 20021026 : y < 3200 ? 30011026 : 30001026), 1, 1, -1);
            qm.removeAll(4032531);
            qm.dispose();
    }
}
