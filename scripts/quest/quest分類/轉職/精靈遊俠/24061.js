/*
     名字：布魯斯的請託2
     地图：弓箭手村
     描述：100000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2 || status == 5) {
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
            qm.sendNext("給，這些是宅急便箱裡的東西……被弄得亂七八糟，沒辦法分辨那個是芽孢了。你能認出其中哪個東西是古代菇菇芽孢嗎？");
            break;
        case 1:
            qm.sendNextPrevS("(這些都是那天收到的菇菇芽孢嗎？那我來看看吧。)");
            break;
        case 2:
            qm.sendSimple("那麼，你認為是哪一個？\r\n\r\n#L0##v4000011:#\r\n#L1##v4000040:#\r\n#L2##v4000437:#\r\n#L3##v4000499:#\r\n#L4##v4032389#");
            break;
        case 3:
            if (selection == 0) {
                qm.sendNext("這個菇菇芽孢好像是菇菇仔的芽孢，你在仔細看看。");
                qm.dispose();
                return;
            }
            if (selection == 1) {
                qm.sendNext("是這個芽孢嗎？我之前有在菇菇王那裡見到過，你在仔細看看。");
                qm.dispose();
                return;
            }
            if (selection == 3) {
                qm.sendNext("變種芽孢？這是最近才出現的芽孢，你在仔細看看。");
                qm.dispose();
                return;
            }
            if (selection == 4) {
                qm.sendNext("這是我朋友思卡斯送給我的芽孢，我還以為弄丟了。你在仔細看看。");
                qm.dispose();
                return;
            }
            qm.sendNextPrev("你認為這是古代菇菇芽孢嗎？倍蒂和溫斯頓博士說我應該相信你。所以我馬上開始研究這個芽孢。");
            break;
        case 4:
            qm.sendNextPrevS("是的，這肯定是古代菇菇芽孢。");
            break;
        case 5:
            qm.sendAcceptDecline("我來仔細看看……嗯，我上一次研究時，見過和這個相似的菇菇芽孢。太好了，我有件事情要拜託你。");
            break;
        case 6:
            qm.sendNext("這個古代菇菇芽孢看起來很像殭屍菇菇芽孢。如果能找到一個殭屍菇菇芽孢。就可以對古代菇菇芽孢進一步分析。所以，想讓你幫我帶一個回來。");
            break;
        case 7:
            qm.gainItem(4032965, qm.getPlayer().itemQuantity(4032965) ? 0 : 1);
            qm.sendNextPrev("殭屍菇菇王在殭屍菇菇王山丘出沒，平時也許很難見到。如果你把這個香菇費洛蒙香水瓶帶在身上，它們一定會被吸引過來的。");
            break;
        case 8:
            qm.sendPrev("它們體型巨大，能力也非常危險。會操縱其它菇菇，也許會很難對付。祝你好運。");
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(24061).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
