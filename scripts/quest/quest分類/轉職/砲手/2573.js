/*
     名字：全新冒險展開
     地图：維多利亞島
     描述：3000600
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("你一定是個新冒險家吧？很高興見到你。我是船長，這艘好船的船長，今天是最適合旅行的天氣。");
            break;
        case 1:
            qm.sendAcceptDecline("我們還沒有完全準備好啟航，所以在等待期間，請隨意在船上四處看看。");
            break;
        case 2:
            qm.dispose();
            Packages.server.quest.MapleQuest.getInstance(2573).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(3000000), qm.getMap(3000000).getPortal(0));
    }
}
