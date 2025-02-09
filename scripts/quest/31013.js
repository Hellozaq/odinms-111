/*
     名字：請擊倒薛西斯
     地图：克里塞基地
     描述：200100010
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("你還沒準備好嗎？");
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
            qm.sendAcceptDecline("現在準備工作差不多完成了。旅行家，你呢？我覺得現在差不多是時候了。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(31013).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
