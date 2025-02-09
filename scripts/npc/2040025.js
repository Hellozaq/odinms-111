/*
     名字：愛奧斯之石II
     地图：愛奧斯塔70樓
     描述：221022100
 */

var status = 0;
var map = 221023200

function start() {
    if (cm.haveItem(4001020)) {
        cm.sendSimple("这是为玩具塔的旅行者而设的魔法石。你只要使用#b魔法石觉醒\r\n卷轴#k，就能移动至任意的楼层。#b\r\n#L0#玩具塔（74层）#l\r\n#L1#玩具塔（22层）#l");
    } else {
        cm.sendOk("需要携带#v4001020#才能启动#p" + cm.getNpc() + "#。");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 1) {
            if (selection == 0) {
                cm.sendYesNo("#m221023200#进行移动吗？将会消耗1个#t4001020#。");
            } else {
                cm.sendYesNo("#m221021200#进行移动吗？将会消耗1个#t4001020#。");
                map = 221021200;
            }
        } else if (status == 2) {
            cm.gainItem(4001020, -1);
            cm.warp(map, 0);
            cm.dispose();
        }
    }
}
