/*
     名字：那因哈特
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
            cm.sendNext("這一刻，也許會被載入史冊……");
            break;
        case 1:
            cm.sendPrev("真是讓人感觸良多。想起離開村子的時候……不，我是在自說自話。別在意。");
            break;
        case 2:
            cm.dispose();
    }
}
