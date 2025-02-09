/*
     名字：小鋼珠轉蛋機
     地图：新叶城-市区中心
     描述：600000000
 */

var z0 = [2430356, 2430358, 2430360, 3010119, 3010120, 3010123, 3010124, 3010125];

var z1 = [2043800, 2043801, 2043802, 2043804, 2043805];

var z2 = [2044600, 2044601, 2044602, 2044604, 2044605];

var z3 = [2044900, 2044901, 2044902, 2044903, 2044904];

var z4 = [2040606, 2040607, 2040617, 2040618, 2040619, 2040703, 2040704, 2040705, 2040714, 2040715];

var z5 = [2290226, 2290227, 2290228, 2290229, 2290230, 2290231, 2290232, 2290233, 2290234, 2290235, 2290236, 2290237, 2290328, 2290359, 2290360, 2290374];

var z6 = [2290238, 2290239, 2290240, 2290241, 2290242, 2290243, 2290244, 2290246, 2290247, 2290370, 2290411];

var z7 = [2290275, 2290276, 2290277, 2290278, 2290279, 2290280, 2290281, 2290282, 2290283, 2290284];

function start() {
    if (cm.getPlayer().itemQuantity(5220000) || cm.getPlayer().itemQuantity(5451000))
        cm.sendSimple("欢迎使用转蛋机进行抽奖服务，你想要使用它吗？\r\n#L0#使用转蛋机。#l\r\n#L2#查看转蛋机奖品。#l");
    else
        cm.sendSimple("欢迎使用转蛋机进行抽奖服务，你想要使用它吗？\r\n#L1#什么是转蛋机。#l\r\n#L2#查看转蛋机奖品。#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            var rand = Math.floor(Math.random() * 100);
            y = rand < 1 ? z0 : rand < 10 ? z1 : rand < 20 ? z2 : rand < 30 ? z3 : rand < 50 ? z4 : rand < 70 ? z5 : rand < 85 ? z6 : z7;
            z = cm.gainGachaponItem(y[Math.floor(Math.random() * y.length)], 1);
            if (z != -1) {
                cm.gainItem(cm.getPlayer().itemQuantity(5220000) && cm.getPlayer().getMap().getId() == 600000000 ? 5220000 : 5451000, -1);
                cm.sendOk("You have obtained #b#t" + z + "##k。");
                cm.dispose();
                return;
            }
            cm.sendOk("请确认是不是你的背包的空间不够。");
            break;
        case 1:
            cm.sendOk("使用转蛋机可以获得稀有的卷轴、时装、椅子、宠物和其他很酷的物品！只需要进入#r游戏商城#k购买#b快乐百宝券#k就可以随\r\n机抽到它。");
            break;
        case 2:
            y0 = y1 = y2 = y3 = y4 = y5 = y6 = y7 = "";
            for (var x0 = 0; x0 < z0.length; x0++)
                y0 += "#v" + z0[x0] + ":#";
            for (var x1 = 0; x1 < z1.length; x1++)
                y1 += "#v" + z1[x1] + ":#";
            for (var x2 = 0; x2 < z2.length; x2++)
                y2 += "#v" + z2[x2] + ":#";
            for (var x3 = 0; x3 < z3.length; x3++)
                y3 += "#v" + z3[x3] + ":#";
            for (var x4 = 0; x4 < z4.length; x4++)
                y4 += "#v" + z4[x4] + ":#";
            for (var x5 = 0; x5 < z5.length; x5++)
                y5 += "#v" + z5[x5] + ":#";
            for (var x6 = 0; x6 < z6.length; x6++)
                y6 += "#v" + z6[x6] + ":#";
            for (var x7 = 0; x7 < z7.length; x7++)
                y7 += "#v" + z7[x7] + ":#";
            cm.sendOk("稀有物品：\r\n" + y0 + "\r\n长杖卷轴：\r\n\r\n" + y1 + "\r\n弩卷轴：\r\n\r\n" + y2 + "\r\n火枪卷轴：\r\n\r\n" + y3 + "\r\n跳跃卷轴：\r\n\r\n" + y4 + "\r\n技能册：\r\n\r\n" + y5 + "\r\n技能册：\r\n\r\n" + y6 + "\r\n技能册：\r\n\r\n" + y7);
            break;
        case 3:
            cm.sendOk("轉蛋機的使用券在楓之谷商城提供，可以使用樂豆點數或楓葉點數購買。點擊螢幕右下角的紅色商店，訪問#r楓之谷商城#k，您可以在商城中購買到轉蛋券。");
    }
    cm.dispose();
}
