/*
     名字：派溫所知道的事情
     地图：閒人勿入
     描述：261020401
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("嗯...不要？討厭就沒有辦法...不過無法告訴你在這裡研究的煉金術師是誰？");
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
            qm.sendNext("喔喔！你來了啊，歡迎歡迎！最近多虧有你不無聊...什麼？什麼？再這裡研究的煉金術師是誰嗎？恩...他的名字知道是知道...");
            break;
        case 1:
            qm.sendNextPrev("什麼啊？什麼...到底是什麼...啊啊！！怎麼就想不起來，這個人對你很重要嗎？沒有什麼事情就忘了吧...不行？這要怎麼辦....");
            break;
        case 2:
            qm.sendAcceptDecline("唉！不知道了，你來親自去看吧！！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3320).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(926120200), qm.getMap(926120200).getPortal(0));
            qm.dispose();
    }
}
