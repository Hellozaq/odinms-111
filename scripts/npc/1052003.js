/*
     名字：克利思
     地图：墮落城市修理店
     描述：103000006
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
            var chat = "我這裡有很多寶石與礦石哦，如果你能提供一些材料，我可以幫你的忙。#b"
            var options = new Array("提煉礦石", "提煉寶石礦石", "兌換#z4000039#", "升級拳套");
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
                var chat = "你知道嗎？很多人都不知道#v4000039#有什麼用，如果你願意的話，我可以用#z4000039#为你提炼一些#v4011001##t4011001#。#b";
                items = [4011001];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 3) {
                var chat = "好的，你想升級成那一種拳套？#b";
                items = [1472023, 1472024, 1472025];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            if (selection != 0 && selection != 1 && selection != 2)
                status++;
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
                var matSet = [[4000039]];
                var matSetQty = [[100]];
                var costSet = [1000];
            }
            item = items[selectItem];
            mat = matSet[selectItem];
            matQty = matSetQty[selectItem];
            cost = costSet[selectItem];
            var chat = "你想做些#t" + item + "#？要做多少呢？";
            cm.sendGetNumber(chat, 1, 1, 100);
            break;
        case 3:
            if (select != 0 && select != 1 && select != 2) {
                selectItem = selection;
                if (select == 3) {
                    var matSet = [[1472022, 4011007, 4021000, 2012000], [1472022, 4011007, 4021005, 2012002], [1472022, 4011007, 4021008, 4000046]];
                    var matSetQty = [[1, 1, 8, 10], [1, 1, 8, 10], [1, 1, 3, 5]];
                    var costSet = [80000, 80000, 100000];
                }
                item = items[selectItem];
                mat = matSet[selectItem];
                matQty = matSetQty[selectItem];
                cost = costSet[selectItem];
            }
            qty = select < 3 ? (selection > 0) ? selection : (selection < 0 ? -selection : 1) : 1;
            var chat = "你想製作";
            chat += qty + "個#t" + item + "#？";
            chat += "我需要你提供足夠的材料才能完成。#b";
            for (var i = 0; i < mat.length; i++)
                chat += "\r\n#v" + mat[i] + "#" + (matQty[i] * qty) + "#t" + mat[i] + "#";
            chat += "\r\n#v4031138#" + cost * qty + "楓幣";
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
                cm.sendOk("很抱歉，請確定一下您有#b" + cost * qty + "#k楓幣嗎？");
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
            cm.gainItem(item, item == 4003000 ? qty * 15 : qty);
            cm.sendOk("完成了，看看我的手藝，不錯吧！");
            cm.dispose();
    }
}
