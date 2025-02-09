var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.haveItemWithId(1902016, true)) {
        cm.warp(140010210, 0);
    } else {
        cm.sendNext("干嘛，人类......我没什么可跟你说的，赶紧走。");
    }

    cm.dispose();
}
