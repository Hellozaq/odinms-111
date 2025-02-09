/*
     名字：卡勒奇沙
     地图：流浪團的帳棚
     描述：260010600
 */

var map = [100000000, 101000000, 102000000, 103000000, 104000000];

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
            if (status > 0) {
                cm.sendOk("阿耶，你害怕高速或者高空嗎？你懷疑我的技術嗎？相信我，這些都不是問題。");
                cm.dispose();
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
            cm.sendNext("我不知道是你怎麼知道的，但你來對地方了，對於那些在炎熱之路、想家的人，我提供直達#b維多利亞#k的航班。");
            break;
        case 1:
            cm.sendYesNo("請記住兩件事：\r\n①這條線實際上是為了海外運輸，所以我不能保證你到底要在哪個城鎮著陸。\r\n②服務費是#b10,000#k楓幣。\r\n\r\n如果你都能接受，那麼我們現在就可以啟航。");
            break;
        case 2:
            if (cm.getPlayer().getMeso() < 10000) {
                cm.sendOk("很抱歉，請確定一下您有#b10,000#k楓幣嗎？");
                cm.dispose();
                return;
            }
            cm.gainMeso(-10000);
            cm.getPlayer().changeMap(cm.getMap(map[Math.floor(Math.random() * map.length)]), cm.getMap(map[Math.floor(Math.random() * map.length)]).getPortal(0));
            cm.dispose();
    }
}
