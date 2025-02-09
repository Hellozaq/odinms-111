/*
     名字：萬人迷的修煉1
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
                qm.sendOk("還沒做好準備嗎？你不會是害怕了吧？");
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
            qm.sendYesNo("訓練要達到的不是練出中看不中用的一身肌肉，而是進行可在實戰中使用的實實在在的訓練。做好接受第一次訓練的心理準備了嗎？");
            break;
        case 1:
            if (qm.getMap(912040100).getCharacters().size() < 1) {
                qm.getMap(912040100).resetFully();
                qm.getPlayer().changeMap(qm.getMap(912040100), qm.getMap(912040100).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(120000104));
                qm.forceStartQuest();
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "萬人迷的第一個試驗場目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
