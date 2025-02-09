/*
     名字：莉琳
     地图：瑞恩村
     描述：140000000
 */

function start() {
    cm.sendSimple("什么事情？\r\n\r\n#L0##b想和你对话。");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            cm.sendNext("我有什么理由必须和你对话吗？我不是那种轻浮的女子。");
            break;
    }
    cm.dispose();
}
