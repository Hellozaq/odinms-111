/*
     名字：吉可穆德
     地图：聯盟會議場
     描述：913050010
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
            cm.sendNext("老實說，我還不能完全相信他們。他們曾經讓我們失望過一次。現在時間還沒過太久，還不能完全抹去他們的過失。");
            break;
        case 1:
            cm.sendNextPrev("不過我們還是同意加入聯盟，這是因為我們覺得這個聯盟至少不會給我們帶來損害。");
            break;
        case 2:
            cm.sendPrev("聯合可以聯合的力量，依靠自己的力量解決應該由自己解決的事情。我想……這應該是最好的選擇。");
            break;
        case 3:
            cm.dispose();
    }
}
