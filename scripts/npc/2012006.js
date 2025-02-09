var status = -1;
var select = -1;
function start() {
    cm.sendSimple("天空之城站有许多升降场，你需要根据目的地，找到相应的升\r\n降场前往。你需要前往通往何处的船所在的升降场呢？\r\n#b#L0#乘坐通往金银岛的升降场#l\r\n#b#L1#乘坐通往玩具城的升降场#l#k\r\n#b#L2#乘坐通往神木村的升降场#l\r\n#b#L3#乘鹤通往武陵的升降场#l\r\n#b#L4#乘吉尼通往阿里安特的升降场#l#k\r\n#b#L5#乘坐通往圣地的升降场#l#k \r\n#b#L6#乘坐通往埃德尔斯坦的升降场#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            if (select == 0) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场，\r\n发船时间是固定的，一定要按照时间前往！");
            } else if (select == 1) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场，\r\n发船时间是固定的，一定要按照时间前往！");
            } else if (select == 2) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场，\r\n发船时间是固定的，一定要按照时间前往！");
            } else if (select == 3) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场。\r\n");
            } else if (select == 4) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场。\r\n");
            } else if (select == 5) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场。\r\n");
            } else if (select == 6) {
                cm.sendNext("请再确认一下要去的目的地是哪里，之后通过我前往升降场。\r\n");
            }
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (select == -1)
            select = selection;
        if (select == 0) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘船通往金银岛的升降场#k吗？");
        } else if (select == 1) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘船通往玩具城的升降场#k吗？");
        } else if (select == 2) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘船通往神木村的升降场#k吗？");
        } else if (select == 3) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘鹤通往武陵的升降场#k吗？");
        } else if (select == 4) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘吉尼通往阿里安特的升降场#k吗？");
        } else if (select == 5) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘船通往圣地的升降场#k吗？");
        } else if (select == 6) {
            cm.sendYesNo("就算走错了通道，也可以通过传送口回到我所在的地方，你大\r\n可放心。要前往#b乘船通往埃德尔斯坦的升降场#k吗？");
        }
    } else if (status == 1) {
        if (select == 0) {
            cm.warp(200000111, 0);
        } else if (select == 1) {
            cm.warp(200000121, 0);
        } else if (select == 2) {
            cm.warp(200000131, 0);
        } else if (select == 3) {
            cm.warp(200000141, 0);
        } else if (select == 4) {
            cm.warp(200000151, 0);
        } else if (select == 5) {
            cm.warp(200000161, 0);
        } else if (select == 6) {
            cm.warp(200000170, 0);
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
