/*
     名字：不相信的王
     地图：第五座塔樓
     描述：211061001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("很抱歉…他可能會攻擊進入見面室的所有人。我想你應該可以抵擋，但還是會有危險吧？");
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
            qm.sendNext("數百年來在這座城裡還是無法置信。你相信嗎？這裡從前是做很漂亮的城。甚至是連窗外堆積的雪，也會溫暖人心的地方。");
            break;
        case 1:
            qm.sendNextPrev("他也是這樣一個人。凡雷恩…他雖然是除了劍術之外，什麼都不知道的木訥之人，但是心地卻很善良。他雖然話不多，但是從眼神中感覺他的用心…這樣的人怎麼會改變…");
            break;
        case 2:
            qm.sendAcceptDecline("黑魔法師到底對他做了什麼呢。為什麼他和過去判若二人呢？他已經把我...完全忘記了嗎？我不知道，你願意替我見見凡雷恩嗎？");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3173).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
