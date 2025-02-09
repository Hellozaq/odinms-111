var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("这是跟外边连接的通道。你就这样放弃这件事出去吗？下次再\r\n进来的时候，你还要从起点开始。");
    } else if (status == 1) {
        cm.warp(103020000, 0);
        cm.dispose();
    }
}
