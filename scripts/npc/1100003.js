/**
 ----------------------------------------------------------------------------------
 Skyferry Between Victoria Island, Ereve and Orbis.

 1100003 Kiriru (To Victoria Island From Ereve)

 Credits to: MapleSanta
 ----------------------------------------------------------------------------------
 **/

var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        } else if (mode == 0) {
            cm.sendNext("看样子你在圣地还有事要处理啊，如果你想去金银岛，就再来找我吧。");
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) {
            cm.sendNext("哎，又见面了.......你好啊。你是想要离开圣地，去往其他地区吗？那你可算来对地方了，我这里运行的船只可以从圣地一路开到#b金银岛#k的#b六岔路口。#k");
        } else if (status == 1) {
            cm.sendYesNo("前往金银岛的#b六岔路口#k大概需时#b30秒#k，费用是#b1000#k金币，你\r\n愿意支付1000金币上船吗？");
        } else if (status == 2) {
            if (mode == 1) {
                if (cm.getMeso() < 1000) {
                    cm.sendNext("那个，就是说，你好像缺点钱......都说了费用是#b1000#k金币......\r\n你先看看道具栏里有没有足够多的钱吧......");
                    cm.dispose();
                } else {
                    for (var i = 0; i < 10; i++) {
                        var map = 200090031 + (i * 2);
                        cm.getPlayer().setTravelTime(60);
                        if (cm.getPlayerCount(map) == 0) {
                            cm.gainMeso(-1000);
                            cm.warp(map, 0);
                            cm.sendClock(60);
                            cm.dispose();
                            return;
                        }
                    }
                    cm.sendNext("看来所有的船都被使用了，请稍后再试。");
                    cm.dispose();
                }
            } else {
                cm.sendNext("看样子你在圣地还有事要处理啊，如果你想去金银岛，就再来找我吧。");
                cm.dispose();
            }
        }
    }
}
