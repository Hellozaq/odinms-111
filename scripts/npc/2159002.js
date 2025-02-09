/*
     名字：班
     地图：人煙稀少的石山
     描述：931000000
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
            cm.sendNext("如果他膽小，就把她留在這兒吧，但是為什麼玩捉迷藏？讓我們玩點酷的。");
            break;
        case 1:
            cm.sendPrevS("我沒有這麼說。", 3);
            break;
        case 2:
            cm.dispose();
    }
}
