/*
     名字：與雪吉拉的友情
     地图：像刀刃的絕壁
     描述：914022100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
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
            qm.sendNext("嗚嗚～提提提很傷心，提提提很生氣。提提提放聲哭泣……嗚嗚嗚嗚～");
            break;
        case 1:
            qm.sendNextPrevS("有，什麼事嗎？");
            break;
        case 2:
            qm.sendNextPrev("提提提做好了寶石，像蘋果般紅潤的寶石。結果小偷卻把寶石給偷走了，提提提沒了寶石，提提提好難過……..");
            break;
        case 3:
            qm.sendNextPrevS("紅色的寶石被偷走了嗎？");
            break;
        case 4:
            qm.sendAcceptDecline("對啊！提提提想找回寶石，幫提提提找回寶石，提提提會給謝禮，抓到小偷，提提提也會給謝禮。");
            break;
        case 5:
            qm.sendPrev("小偷跑哪裡去了，那裡………用來吃飯的手是右手，不用來吃飯的手是左手…#b左邊#k？往左邊走就能抓到小偷。");
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21303).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
