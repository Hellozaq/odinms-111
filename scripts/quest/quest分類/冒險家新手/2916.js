/*
     名字：萬人迷的修煉2
     地图：訓練場
     描述：120000104
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("僅僅通過了一次考驗而已，可不能驕傲自滿。");
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
            qm.sendYesNo("這次就提高一些訓練強度，如何？做好準備了嗎？");
            break;
        case 1:
            if (qm.getMap(912040200).getCharacters().size() < 1) {
                qm.getMap(912040200).resetFully();
                qm.getPlayer().changeMap(qm.getMap(912040200), qm.getMap(912040200).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(120000104));
                qm.forceStartQuest();
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "萬人迷的第二個試驗場目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
