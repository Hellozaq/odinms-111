/**
 ----------------------------------------------------------------------------------
 Skyferry Between Victoria Island, Ereve and Orbis.

 1100007 Kiriru (Victoria Island Station to Ereve)

 Credits to: MapleSanta
 ----------------------------------------------------------------------------------
 **/

var menu = new Array("Ereve");
var method;

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
            cm.sendNext("如果你不感兴趣，那好吧……");
            cm.dispose();
            return;
        }
        status++;
        if (status == 0) {
            var display = "";
            for (var i = 0; i < menu.length; i++) {
                display += "\r\n#L" + i + "##b前往圣地(1000金币)#k";
            }
            cm.sendSimple("嗯，啊……你是说……你想离开金银岛，到其他地区去？乘坐这条船，可以到达#b圣地#k。那是个阳光洒满树叶、微风吹皱\r\n湖水的、美丽的、居住着神兽和女皇的地方。你要到圣地去吗？旅行将花费你#b1000#k金币。\r\n" + display);

        } else if (status == 1) {
            if (cm.getMeso() < 1000) {
                cm.sendNext("你明明没有钱嘛……必须有#b1000#k金币才可以去。");
                cm.dispose();
            } else {
                for (var i = 0; i < 10; i++) {
                    var map = 200090030 + (i * 2);
                    cm.getPlayer().setTravelTime(60);
                    if (cm.getPlayerCount(map) == 0) {
                        cm.gainMeso(-800);
                        cm.warp(map, 0);
                        cm.sendClock(60);
                        cm.dispose();
                        return;
                    }
                }
                cm.sendNext("看来所有的船都被使用了，请稍后再试。");
            }
        }
    }
}
