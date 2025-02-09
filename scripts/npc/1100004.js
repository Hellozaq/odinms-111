/*
 名字: 奇鲁
 地圖: 天空渡口
 描述: 130000210
*/

var flightCost = 5000;
var shipCost = 1000;
var status = 0;

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
            cm.sendNext("什么嘛？你在圣地还有事没处理完吗？那等你忙完了再来吧。");
            cm.dispose();
            return;
        }
        status++;

        if (status == 0) {
            // 使用技能判断
            if (cm.getPlayer().getSkillLevel(80001027) != 1 && cm.getPlayer().getSkillLevel(80001028) != 1) {
                cm.sendNext("嗯......这风路不错呢，你打算离开圣地，去其他地区吗？这艘船一直运行到神秘岛大陆的天空之城。");
                status++;
            } else {
                cm.sendSimple("你有飞机吗？如果有飞机，那就不必坐船就可以移动了，只不过需要支付5000金币的费用。\r\n#L0##b坐飞机飞走。#k#r（5000金币）#k#l\r\n#L1##b坐船前往。#k#l");
            }
        } else if (status == 1) {
            if (selection == 0) {
                var options = "你要坐哪架飞机走啊？\r\n";
                if (cm.getPlayer().getSkillLevel(80001027) == 1) {
                    options += "\r\n#L2##b木飞机#k#l";
                }
                if (cm.getPlayer().getSkillLevel(80001028) == 1) {
                    options += "\r\n#L3##b红飞机#k#l";
                }
                if (options == "你要坐哪架飞机走啊？") {
                    cm.sendOk("你没有合适的飞机，无法飞行。");
                    cm.dispose();
                } else {
                    cm.sendSimple(options);
                }
            } else if (selection == 1) {
                cm.sendNext("嗯......这风路不错呢，你打算离开圣地，去其他地区吗？这艘船一直运行到神秘岛大陆的天空之城。");
            }
        } else if (status == 2) {
            if (selection == 2 || selection == 3) {
                if (cm.getPlayer().getMeso() < flightCost) {
                    cm.sendOk("码头费用不够呢......");
                    cm.dispose();
                } else {
                    cm.gainMeso(-flightCost); // 扣除飞行费用
                    cm.giveBuff(selection < 1 ? 80001027 : 80001028, 1); // 添加相应的buff
                    cm.getPlayer().changeMap(cm.getMap(200110060), cm.getMap(200110060).getPortal(0));
                    cm.sendClock(60); // 显示倒计时
                    cm.dispose();
                }
            } else {
                cm.sendYesNo("到神秘岛大陆的#b天空之城#k大概需要#b30秒#k，费用是#b1000#k金币，\r\n你要支付1000金币上船吗？");
            }
        } else if (status == 3) {
            if (cm.getPlayer().getMeso() < shipCost) {
                cm.sendOk("你没钱嘛......都说了费用是#b1000#k金币。");
                cm.dispose();
            } else {
                for (var i = 0; i < 10; i++) {
                    var map = 200090021 + (i * 2);
                    if (cm.getPlayerCount(map) == 0) {
                        cm.gainMeso(-shipCost); // 扣除乘船费用
                        cm.getPlayer().setTravelTime(60); // 设置旅行时间
                        cm.warp(map, 0); // 传送玩家到空闲地图
                        cm.sendClock(60); // 显示倒计时
                        cm.getPlayer().dispelBuff(80001027);
                        cm.getPlayer().dispelBuff(80001028);
                        cm.dispose();
                        return;
                    }
                }
                cm.sendNext("看来所有的船都被使用了，请稍后再试。");
                cm.dispose();
            }
        }
    }
}
