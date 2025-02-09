/*
     名字：找回遺失的記憶
     地图：劍豪
     描述：劍豪
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendNext("好像找回了原來的實力，遠遠的注視著劍鬥為我們聯合軍和楓之谷盡力的模樣，顯示了很大的成果。");
            break;
        case 1:
            qm.sendNextPrev("在這楓之穀神那第一次正開眼，為了適應");
            break;
        case 2:
            qm.sendNextPrev("劍鬥若你參加我們的聯盟就很放心，以後就拜託你啦。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3523).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
