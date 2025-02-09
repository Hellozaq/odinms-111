var z0 = [2430350, 2430352, 2430354, 3010101, 3010106, 3010113, 3010114, 3010115];

var z1 = [2041000, 2041001, 2041002, 2041026, 2041027];

var z2 = [2040105, 2040106, 2040107, 2040108, 2040109];

var z3 = [2040606, 2040607, 2040617, 2040618, 2040619, 2040703, 2040704, 2040705, 2040714, 2040715];

var z4 = [2040758, 2040759, 2040760, 2040803, 2040804, 2040805, 2040810, 2040811, 2040914, 2040915, 2040916, 2040917];

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
            y = rand < 1 ? z0 : rand < 30 ? z1 : rand < 60 ? z2 : rand < 90 ? z3 : z4;
            z = cm.gainGachaponItem(y[Math.floor(Math.random() * y.length)], 1);
            if (z != -1) {
                cm.gainItem(cm.getPlayer().itemQuantity(5220000) && cm.getPlayer().getMap().getId() == 809000201 ? 5220000 : 5451000, -1);
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
            y0 = y1 = y2 = y3 = y4 = "";
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
            cm.sendOk("稀有物品：\r\n\r\n" + y0 + "\r\n魔防卷轴：\r\n\r\n" + y1 + "\r\n回避卷轴：\r\n\r\n" + y2 + "\r\n跳跃卷轴：\r\n\r\n" + y3 + "\r\n攻击卷轴：\r\n\r\n" + y4);
            break;
        case 3:
            cm.sendOk("轉蛋機的使用券在楓之谷商城提供，可以使用樂豆點數或楓葉點數購買。點擊螢幕右下角的紅色商店，訪問#r楓之谷商城#k，您可以在商城中購買到轉蛋券。");
    }
    cm.dispose();
}
