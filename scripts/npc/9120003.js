/*
Hikari - Showa Town(801000000)
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("请改天再来吧。");
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendYesNo("我送你去澡堂啊？只需要支付#b" + 300 + "#k金币就能进去。");
    } else if (status == 1) {
        if (cm.getMeso() < 300) {
            cm.sendOk("请检查一下您是否有" + 300 + " 金币，否则我就不能让你进去了。");
        } else {
            cm.gainMeso(-300);
            if (cm.getPlayerStat("GENDER") == 0) {
                cm.warp(801000100);
            } else {
                cm.warp(801000200);
            }
        }
        cm.dispose();
    }
}
