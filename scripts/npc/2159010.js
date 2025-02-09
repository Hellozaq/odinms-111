/*
     名字：J
     地图：礦山後面
     描述：931000030
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
            cm.sendNext("呼…終於甩掉了，雖然不覺得會輸給那個傢伙，但卻沒有信心保護你們，你們為什麼會在那裡？太危險了，村莊的老人沒有跟你們說不要到礦山這邊嗎？");
            break;
        case 1:
            cm.sendNextPrev("對、對不起。#b#h0##k沒有錯，反而還救了我。", 2159007);
            break;
        case 2:
            cm.sendNextPrev("嗯？這樣看來，你…不像是村莊的人，這奇怪的衣服到底是什麼？你該不會是被實驗的孩子吧？");
            break;
        case 3:
            cm.sendNextPrev("#b(簡單地說明剛才發生的事情。)", 2159007);
            break;
        case 4:
            cm.sendNextPrev("…呼…這樣啊…雖然猜測黑色翅膀可能在進行危險的計畫，沒想到是真的…真是可怕，快去通知大家，要想出對策才行。");
            break;
        case 5:
            cm.sendNextPrevS("#b那個…請問你是誰呢？為什麼會突然在那裡出現？還有，為什麼會救我們呢？");
            break;
        case 6:
            cm.sendNextPrev("…這個…你們也都長大了，也遇到這樣的事情，想瞞也瞞不了…好吧，就告訴你，你也知道我們的村莊被黑色翅膀統治的事吧？");
            break;
        case 7:
            cm.sendNextPrev("被搶走的礦山、被控制的議會、監視者的存在……我們村莊的人像奴隸一樣乖乖的聽從他們的命令，但是黑色翅膀再厲害，也沒有辦法統治我們的心。");
            break;
        case 8:
            cm.sendNextPrev("我們是末日反抗軍，和隊友一起對抗黑色翅膀的反抗軍，我不能告訴你名字，但可以告訴你我的代號叫 J，現在瞭解吧？");
            break;
        case 9:
            cm.sendNextPrev("懂了的話，就快回村莊吧，這裡太危險了，不要再跑到這裡來，曾經是實驗者的孩子，讓他在這裡有可能再被抓回去，我把他帶回我隊友那裡，看見我的事要保密，不可以說出去。");
            break;
        case 10:
            cm.sendNextPrevS("#b我可以再問一個問題嗎？我可以參加末日反抗軍嗎？");
            break;
        case 11:
            cm.sendPrev("呵…你想也對抗黑色翅膀啊？只要你有心，也不是不能加入末日反抗軍。但不是現在，等你到Lv10以上，末日反抗軍會先和你連絡，如果到時還想加入的話會有機會再見面的，那就先這樣了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2000000# #t2000000# 3 \r\n#v2000003# #t2000003# 3 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 90 exp");
            break;
        case 12:
            cm.gainExp(90);
            cm.gainItem(2000000, 3);
            cm.gainItem(2000003, 3);
            cm.getPlayer().changeMap(cm.getMap(310000000), cm.getMap(310000000).getPortal(8));
            cm.dispose();
    }
}
