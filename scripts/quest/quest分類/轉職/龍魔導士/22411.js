/*
     名字：又變得不合身的馬鞍
     地图：動物園
     描述：230000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 3) {
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
            qm.sendSimple("主人……呃……\r\n#L0##b怎麼了？發現什麼問題了嗎？#l");
            break;
        case 1:
            qm.sendSimple("由於又長大了的關係，好像馬鞍開始越來越緊了…\r\n#L0##b…你還長得真快！#l");
            break;
        case 2:
            qm.sendAcceptDecline("看來我們又要換新馬鞍啦～主人，我們現在就去找坎特，讓他幫你製作新的馬鞍。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(22411).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
