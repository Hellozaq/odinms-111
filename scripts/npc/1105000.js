/*
     名字：西格諾斯
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
            cm.sendNext("通過召開第1屆的大陸會議，楓之谷世界所有職業群參加的#b楓之谷聯盟#k誕生了。");
            break;
        case 1:
            cm.sendNextPrev("還好，會議取得了不錯的結果……");
            break;
        case 2:
            cm.sendPrev("真正的戰鬥現在剛剛開始。希望大家能解除一切誤會，齊心協力。");
            break;
        case 3:
            cm.dispose();
    }
}
