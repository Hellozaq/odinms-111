/*
     名字：村長塔塔曼
     地图：神木村
     描述：240000000
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 3) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendSimple("你找我有事吗？\r\n#L0##b魔法种子#l\r\n#L1#为了神木村的行动#l\r\n#L2#飞龙的香水瓶#l");
            break;
        case 1:
            if (selection == 0) {
                cm.sendGetNumber("#b#t4031346##k是一件贵重物品，不能白送给你。你要买#b#t4031346##k需要花费你#b30000金币#k。你确定要购买吗？", 1, 1, 100);
            }
            if (selection == 1) {
                chat = "想捐赠一些什么？捐赠的数量必须是100个，这样我才能算出应该给你多少个#t2000005#。#b";
                items = [4000226, 4000229, 4000236, 4000237, 4000261, 4000231, 4000238, 4000239, 4000241, 4000242, 4000234, 4000232, 4000233, 4000235, 4000243];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##v" + items[i] + "##t" + items[i] + "##l";
                cm.sendSimple(chat);
            }
            if (selection == 2) {
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3759)).getStatus() != 1) {
                    cm.sendOk("飞龙的香水瓶？当你真正需要它的时候再来找我！");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "请确认背包是否有足够的空间。"));
                    cm.dispose();
                    return;
                }
                cm.sendOk(cm.getPlayer().itemQuantity(4032531) ? "哦……我有记得之前给过你飞龙的香水瓶。" : "飞龙的香水瓶……這可是很贵重的东西，希望你能善用它。");
                cm.gainItem(4032531, cm.getPlayer().itemQuantity(4032531) ? 0 : 1);
                cm.dispose();
            }
            select = selection;
            break;
        case 2:
            if (select < 1) {
                num = selection;
                cost = num * 30000;
                cm.sendYesNo("你确定要购买#b" + num + "#k个#t4031346#吗？#k它将花费你#b" + cost + "#k金币。");
            }
            if (select > 0) {
                selectItem = selection;

                var matSet = [4000226, 4000229, 4000236, 4000237, 4000261, 4000231, 4000238, 4000239, 4000241, 4000242, 4000234, 4000232, 4000233, 4000235, 4000243];
                var matSetQty = [7, [7, 8], 8, [9, 10], 10, 11, [12, 13], 13, 14, 15, 16, 17, 17, 100, 100];

                item = matSet[selectItem];

                if (matSetQty[selectItem] instanceof Array) {
                    var length = matSetQty[selectItem][1] - matSetQty[selectItem][0];
                    matQty = matSetQty[selectItem][0] + java.lang.Math.round(java.lang.Math.random() * length);
                } else
                    matQty = matSetQty[selectItem];
                var chat = "你确定要捐赠#r100#k个#b#t" + item + "##k？";
                cm.sendYesNo(chat);
            }
            break;
        case 3:
            if (select < 1) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "请确认背包是否有足够的空间。"));
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getMeso() < cost) {
                    cm.sendOk("请确认是否有足够的金币。");
                    cm.dispose();
                    return;
                }
                cm.sendOk("再见。");
                cm.gainItem(4031346, num);
                cm.gainMeso(-cost);
                cm.dispose();
            }
            if (select > 0) {
                if (cm.getPlayer().itemQuantity(item) < 100) {
                    cm.sendOk("很抱歉，你所捐赠的#z" + item + "#不足#r" + 100 + "#k个。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "请确认背包是否有足够的空间。"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(item, -100);
                cm.gainItem(2000005, matQty);
                cm.sendOk("非常感谢你对米纳尔森林帮助，请收下这个小礼物，希望对你会有帮助。");
            }
            cm.dispose();
    }
}
