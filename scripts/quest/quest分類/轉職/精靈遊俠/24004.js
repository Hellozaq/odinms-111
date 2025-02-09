/*
     名字：櫻花處的結界
     地图：櫻花處
     描述：910150001
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendYesNo("#b看到了結界的魔法語言，念誦咒語，可以為櫻花處設定結界，至少在100年之內誰也無法入侵村子的强力結界……要設定結界嗎？");
            break;
        case 1:
            qm.sendPrev("#b設定了結界，這下村子應該安全了……");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(24004).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
