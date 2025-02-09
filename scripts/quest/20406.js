/*
     名字：消失的騎士
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
            if (status > 2) {
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
            qm.sendNextS("優納米斯呢？我有看到他在黑暗魔女的洞穴留下的紙條，他應該有回到#b耶雷弗#k。", 3);
            break;
        case 1:
            qm.sendNextPrev("優納米斯並沒有返回耶雷弗，為什麼你先回來了？");
            break;
        case 2:
            qm.sendNextPrevS("(講述了尋找優納米斯所發生的一切經過)", 3);
            break;
        case 3:
            qm.sendAcceptDecline("我有不好的預感！現在你快返回黑暗魔女的洞穴，再仔細探明下，看來優納米斯的處境應該#b很危險#k。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20406).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
