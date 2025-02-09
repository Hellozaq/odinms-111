/*
     名字：轉蛋機
     地图：古代神社
     描述：800000000
 */

var z0 = [2430333, 2430337, 2430341, 3010067, 3010069, 3010071, 3010072, 3010073];

var z1 = [2043100, 2043101, 2043102, 2043104, 2043105, 2043110, 2043111, 2043112, 2043113, 2043114];

var z2 = [2043200, 2043201, 2043202, 2043204, 2043205, 2043210, 2043211, 2043212, 2043213, 2043214];

var z3 = [2045200, 2045201, 2045202, 2045203, 2045204];

var z4 = [2040814, 2040815, 2040816, 2040817, 2040818, 2040918, 2040919, 2040920, 2040921, 2040922, 2041009, 2041010, 2041011, 2041032, 2041033];

var z5 = [2290096, 2290125, 2290340, 2290341, 2290342, 2290343, 2290344, 2290345, 2290346, 2290347, 2290348, 2290349, 2290290, 2290291];

var z6 = [2290354, 2290355, 2290356, 2290357, 2290358, 2290361, 2290362, 2290363, 2290364, 2290365, 2290366, 2290367];

function start() {
    if (cm.getPlayer().itemQuantity(5220000) || cm.getPlayer().itemQuantity(5451000))
        cm.sendSimple("欢迎使用转蛋机进行抽奖服务，你想要使用它吗？#b\r\n\r\n#L0#使用转蛋机。#l\r\n#L2#查看转蛋机奖品。#l");
    else
        cm.sendSimple("欢迎使用转蛋机进行抽奖服务，你想要使用它吗？#b\r\n\r\n#L1#什么是转蛋机。#l\r\n#L2#查看转蛋机奖品。#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            var rand = Math.floor(Math.random() * 100);
            y = rand < 1 ? z0 : rand < 15 ? z1 : rand < 30 ? z2 : rand < 45 ? z3 : rand < 60 ? z4 : rand < 80 ? z5 : z6;
            z = cm.gainGachaponItem(y[Math.floor(Math.random() * y.length)], 1);
            if (z != -1) {
                cm.gainItem(cm.getPlayer().itemQuantity(5220000) && cm.getPlayer().getMap().getId() == 800000000 ? 5220000 : 5451000, -1);
                cm.sendOk("你获得了一个#b#t" + z + "##k。");
                cm.dispose();
                return;
            }
            cm.sendOk("请确认是不是你的背包的空间不够。");
            break;
        case 1:
            cm.sendOk("使用转蛋机可以获得稀有的卷轴、时装、椅子、宠物和其他很酷的物品！只需要进入#r游戏商城#k购买#b快乐百宝券#k就可以随\r\n机抽到它。");
            break;
        case 2:
            y0 = y1 = y2 = y3 = y4 = y5 = y6 = "";
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
            cm.sendOk("稀有物品：\r\n\r\n" + y0 + "\r\n单手斧卷轴：\r\n\r\n" + y1 + "\r\n单手棍卷轴：\r\n\r\n" + y2 + "\r\n双弩枪卷轴：\r\n\r\n" + y3 + "\r\n魔力卷轴：\r\n\r\n" + y4 + "\r\n技能册：\r\n\r\n" + y5 + "\r\n技能册：\r\n\r\n" + y6);
            break;
        case 3:
            cm.sendOk("轉蛋機的使用券在楓之谷商城提供，可以使用樂豆點數或楓葉點數購買。點擊螢幕右下角的紅色商店，訪問#r楓之谷商城#k，您可以在商城中購買到轉蛋券。");
    }
    cm.dispose();
}
