/*
     名字：可疑的女子
     地图：發電廠大廳
     描述：931050701
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendNext("……！這裡怎麼會有人……？！黑色翅膀？！");
            break;
        case 1:
            cm.sendNextPrevS("嗯？你是誰！？伊培賀那傢伙在哪？！");
            break;
        case 2:
            cm.sendNextPrev("(不是黑色翅膀嗎……？那是誰？)");
            break;
        case 3:
            cm.sendNextPrev("快說你是誰！");
            break;
        case 4:
            cm.sendNextPrevS("我是龍魔導士……因為聽說伊培賀在這裡，所以才會過來……");
            break;
        case 5:
            cm.sendPrev("(不是黑色翅膀嗎……？普通人嗎？別管他，快走吧！)");
            break;
        case 6:
            cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(22615).forceStart(cm.getPlayer(), 0, 1);
            cm.dispose();
    }
}
