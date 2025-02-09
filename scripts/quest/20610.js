/*
     名字：仍舊沒有結束的修煉
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("真是的，這部是說沒有野心而是說沒有上進心。這不是件好事啊。");
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
            qm.sendAcceptDecline("這段時間學習很多技能了嗎？應該相當熟悉了吧…所以現在要學習#b新的技能了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(20610).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
