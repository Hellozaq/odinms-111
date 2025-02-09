/*
     名字：約翰
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
            cm.sendNext("我很高興你能來，我覺得我們被監視了，我們不該考慮回去嗎？");
            break;
        case 1:
            cm.sendPrev("你怎麼這麼膽小，我們一路走來，我們回去之前至少應該做點什麼。", 2159002);
            break;
        case 2:
            cm.dispose();
    }
}
