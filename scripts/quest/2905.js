/*
     名字：照顧乳牛
     地图：餐廳
     描述：120000103
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
                qm.sendOk("我知道你其實一點都不忙！你是希望看到那些牛餓著肚子吧？真是冷淡的朋友..");
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
            qm.sendNext("你現在很忙嗎？如果不忙，能不能幫我一個忙？牧場裡的牛到了該吃飯的時候了，但是我一直忙著準備料理，忘記了。");
            break;
        case 1:
            qm.sendYesNo("尤其是小乳牛，食欲非常好，馬上就會餓的。若現在不給他們吃的，也許會變得非常狂暴呢。怎麼樣？你願意去嘗試一下嗎？");
            break;
        case 2:
            qm.getPlayer().changeMap(qm.getMap(912000100), qm.getMap(912000100).getPortal(1));
            qm.forceStartQuest();
            qm.dispose();
    }
}
