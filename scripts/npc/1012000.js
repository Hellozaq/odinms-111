var status = 0;
var maps = [104000000, 102000000, 101000000, 103000000, 120000000];
var cost = [1000, 1000, 800, 1000, 800];
var selectedMap = -1;
var mesos;

function start() {
    cm.sendNext("你好~! 我是金银岛中巴。你想快速又安全地移动到其他村庄吗\r\n？那么就请使用令客户百分百满意的#b金银岛中巴#k吧。这次我给\r\n你免费优待！我将会送你去想去的地方。");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 1 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 2 && mode == 0) {
            cm.sendNext("如果你想移动到其他村庄，请随时使用我们的出租车~");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 1) {
            var selStr = "";
            if (cm.getJob() == 0) {
                selStr += "我们对新手有九折优惠。";
            }
            selStr += "请选择目的地。#b";
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.getJob() == 0 ? cost[i] / 10 : cost[i]) + " 金币)#l";
            }
            cm.sendSimple(selStr);
        } else if (status == 2) {
            if (maps[selection] == 104000000) {
                cm.sendYesNo("在这里似乎没什么别的事情了。您真的要移动到#b#m" + maps[selection] + "##k村吗？");
            } else if (maps[selection] == 120000000) {
                cm.sendYesNo("在这里似乎没什么别的事情了。您真的要移动到#b#m" + maps[selection] + "##k\r\n村吗？");
            } else {
                cm.sendYesNo("在这里似乎没什么别的事情了。您真的要移动到#b#m" + maps[selection] + "##k村吗\r\n？");
            }

            selectedMap = selection;
        } else if (status == 3) {
            if (cm.getJob() == 0) {
                mesos = cost[selectedMap] / 10;
            } else {
                mesos = cost[selectedMap];
            }

            if (cm.getMeso() < mesos) {
                cm.sendNext("你没有足够的金币。很抱歉这么说，但是没有它，你就不能坐出租车了。");
                cm.dispose();
                return;
            }

            cm.gainMeso(-mesos);
            cm.warp(maps[selectedMap], 0);
            cm.dispose();
        }
    }
}
