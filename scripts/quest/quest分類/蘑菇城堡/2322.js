/*
     名字：跨越城牆（２）
     地图：菇菇森林路口
     描述：106020000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("是嗎？你可以想想有沒有其它什麼#b高招#k？不然的話再來找我。");
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
            qm.sendAcceptDecline("雖說可以打破結界，但我的心裡仍然不踏實。我們菇菇王國的城堡想從外部進入是絕對不可能的，想要潛入不是件容易的事情。嗯。請你先去城堡週邊#b偵察#k一下好嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2322).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.dispose();
    }
}
