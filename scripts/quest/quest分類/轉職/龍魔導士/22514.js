/*
     名字：那就加強修練吧
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
                qm.sendOk("主人，我們去修煉吧。");
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
            qm.sendNext("主人，我們去修煉吧。直到可以輕鬆擊退藍菇菇為止，再去幫助那個女人。現在要做的就是修練！修修修修修修練！");
            break;
        case 1:
            qm.sendNextPrevS("(實在拿牠沒辦法，那就只好去修煉吧。聽說在弓箭手村周圍有一個修練場，斯坦大叔也許會知道。)");
            break;
        case 2:
            qm.sendNextPrev("讓我們訓練吧，主人。走吧。");
            break;
        case 3:
            qm.sendNextPrevS("好的，好的！知道了，我先去找斯坦大叔問問修練場的事情。");
            break;
        case 4:
            qm.sendYesNo("真的，那我們真的是要去修練嗎？");
            break;
        case 5:
            qm.sendNext("太好了，主人，這就是我喜歡你的原因。");
            break;
        case 6:
            qm.sendPrevS("(如果不答應牠，一定又會跟我吵。快去問問斯坦大叔修煉場的事情吧。)", 3);
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(22514).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
