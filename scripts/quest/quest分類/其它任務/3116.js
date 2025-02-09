/*
     名字：邪摩斯的覺醒
     地图：邪摩斯的單人房
     描述：211000002
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
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
            qm.sendNext("喂，你好，我叫邪摩斯，我不是人類，而是侏儒怪。對於我，你現在一定有很多疑問吧？呵呵呵。");
            break;
        case 1:
            qm.sendAcceptDecline("大家都一直這樣叫我，但是我到底是誰？為什麼我記不起小時候的事情？真讓人鬱悶……你得幫幫我，你能幫幫我這個不幸的人嗎？");
            break;
        case 2:
            qm.sendPrev("我現在被囚禁在冰原雪域長老公館的地下，如果你能幫我，請馬上到我這裡來。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3116).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
