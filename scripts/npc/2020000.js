/*
     名字：伯堅
     地图：冰原雪域市集
     描述：211000100
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
            if (status < 4) {
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
            var chat = "我是艾納斯島上最厲害的神匠，你想讓我做一些什麼。#b"
            var options = new Array("提煉礦石", "提煉寶石礦石", "提煉稀有寶石", "提煉水晶礦", "做物料", "做弓＆弩箭");
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                var chat = "好的，你想提煉哪一種礦石？#b";
                items = [4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 1) {
                var chat = "好的，你想提煉哪一種寶石礦石？#b";
                items = [4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 2) {
                var chat = "好的，你想提煉哪一種稀有寶石？#b";
                items = [4011007, 4021009];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 3) {
                var chat = "好的，你想提煉哪一種水晶礦石？#b";
                items = [4005000, 4005001, 4005002, 4005003, 4005004];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 4) {
                var chat = "物料？有幾種物料可以為你做。#b";
                items = ["使用#z4000003#製作#z4003001#", "使用#z4000018#製作#z4003001#", "製作#z4003000#(15個)"];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "#" + items[i] + "#l";
            }
            if (selection == 5) {
                var chat = "弓＆弩箭？沒問題。「單位數量：1000」#b";
                items = [2060000, 2061000, 2060001, 2061001, 2060002, 2061002];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;
            if (select == 0) {
                var matSet = [[4010000], [4010001], [4010002], [4010003], [4010004], [4010005], [4010006]];
                var matSetQty = [[10], [10], [10], [10], [10], [10], [10]];
                var costSet = [300, 300, 300, 500, 500, 500, 800];
            }
            if (select == 1) {
                var matSet = [[4020000], [4020001], [4020002], [4020003], [4020004], [4020005], [4020006], [4020007], [4020008]];
                var matSetQty = [[10], [10], [10], [10], [10], [10], [10], [10], [10]];
                var costSet = [500, 500, 500, 500, 500, 500, 500, 1000, 3000];
            }
            if (select == 2) {
                var matSet = [[4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006], [4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008]];
                var matSetQty = [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1]];
                var costSet = [10000, 15000];
            }
            if (select == 3) {
                var matSet = [[4004000], [4004001], [4004002], [4004003], [4004004]];
                var matSetQty = [[10], [10], [10], [10], [10]];
                var costSet = [5000, 5000, 5000, 5000, 1000000];
            }
            if (select == 4) {
                items = [4003001, 4003001, 4003000];
                var matSet = [[4000003], [4000018], [4011000, 4011001]];
                var matSetQty = [[10], [5], [1, 1]];
                var costSet = [0, 0, 0];
            }
            if (select == 5) {
                var matSet = [[4003001, 4003004], [4003001, 4003004], [4011000, 4003001, 4003004], [4011000, 4003001, 4003004], [4011001, 4003001, 4003005], [4011001, 4003001, 4003005]];
                var matSetQty = [[1, 1], [1, 1], [1, 3, 10], [1, 3, 10], [1, 5, 15], [1, 5, 15]];
                var costSet = [0, 0, 0, 0, 0, 0]
            }
            item = items[selectItem];
            mat = matSet[selectItem];
            matQty = matSetQty[selectItem];
            cost = costSet[selectItem];
            var chat = "你想做些#t" + item + "#？要做多少呢？";
            cm.sendGetNumber(chat, 1, 1, 100);
            break;
        case 3:
            qty = (selection > 0) ? selection : (selection < 0 ? -selection : 1);
            var chat = "你想製作";
            chat += qty + "個#t" + item + "#？";
            chat += "我需要你提供足夠的材料才能完成。#b";
            for (var i = 0; i < mat.length; i++)
                chat += "\r\n#v" + mat[i] + "#" + (matQty[i] * qty) + "#t" + mat[i] + "#";
            chat += select != 4 && select != 5 ? "\r\n#v4031138#" + cost * qty + "楓幣" : "";
            cm.sendYesNo(chat);
            break;
        case 4:
            for (var i = 0; i < mat.length; i++)
                if (cm.getPlayer().itemQuantity(mat[i]) < matQty[i] * qty) {
                    cm.sendOk("很抱歉，你所提供的材料不能滿足製作要求。");
                    cm.dispose();
                    return;
                }
            if (cm.getPlayer().getMeso() < (cost * qty)) {
                cm.sendOk("很抱歉，沒有足夠的楓幣我不能為你服務。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            for (var i = 0; i < mat.length; i++)
                cm.gainItem(mat[i], -matQty[i] * qty);
            cm.gainMeso(-cost * qty);
            cm.gainItem(item, item == 4003000 ? qty * 15 : item >= 2060000 && item <= 2061002 ? qty * 1000 : qty);
            cm.sendOk("像往常一樣，是一件完美的東西。");
            cm.dispose();
    }
}
