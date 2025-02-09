/*
     名字：回到過去的路
     地图：特魯的情報商店
     描述：104000004
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 5) {
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
            qm.sendNext("噢，英雄大人，等級升了很多嘛。現在又有了新的進展。");
            break;
        case 1:
            qm.sendNextPrev("英雄大人努力修煉的時候，我和莉琳調查了關於英雄大人的過去和封印石。可是前不久有個很有趣的情報，你知不知道孩子們的玩具村莊#b#m220000000##k？");
            break;
        case 2:
            qm.sendNextPrev("在玩具城裡有兩個管理時間鐘塔，各盡其職管理時間，可以將玩具城裡的時間迴圈，因為孩子們長大了玩具就沒用了。");
            break;
        case 3:
            qm.sendNextPrev("現在兩個鐘塔之中好像有一個壞了，因此在玩具城管理的時間裡出現了漏洞，可以#b回到過去#k…有趣的是從這裡開始。");
            break;
        case 4:
            qm.sendNextPrev("綜合了去過過去的人們的情報結果，莉琳確定那個時代跟英雄大人生活的時代相似，那麼去哪裡的話是不是會得到封印石的有關情報呢？對吧？");
            break;
        case 5:
            qm.sendNextPrev("其實有沒有封印石的資訊都無所謂，比那個更重要的是，去哪裡也許會碰到認識英雄大人的人呢。");
            break;
        case 6:
            qm.sendAcceptDecline("壞的鐘塔是右邊的鐘塔…就是赫爾奧斯塔。在粉紅兔子頭模樣的建築裡有管理時間的裝置，可以通過哪裡可以前往過去。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(21749).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
