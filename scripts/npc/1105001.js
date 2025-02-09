/*
     名字：赫麗娜
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
            cm.sendNext("楓之谷世界所有職業群參加的#b楓之谷聯盟#k誕生了。");
            break;
        case 1:
            cm.sendNextPrev("冒險家的話，也許希望能自由地旅行，沒辦法強迫他們全都參加這個聯盟。");
            break;
        case 2:
            cm.sendPrev("但是希望大家不要忘記我們必須要做的事情，相信共同的目標可以激勵冒險家們和我們一起努力。");
            break;
        case 3:
            cm.dispose();
    }
}
