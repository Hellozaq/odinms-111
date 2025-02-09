/*
     名字：莫哈默德
     地图：納希民宅
     描述：260000200
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
            var chat = "你是來提煉礦石還是珠寶的？不管你有多少礦石，如果沒有像我這樣的大師把它們提煉出來，那麼它們就看不到曙光了，我們現在就來處理這件事，你想提煉什麼樣的礦石？#b";
            var options = new Array("提煉礦石", "提煉寶石礦石", "提煉水晶礦");
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                var chat = "好的，你想提煉哪一種礦石？#b";
                items = [4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008];
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
                var chat = "好的，你想提煉哪一種水晶礦石？#b";
                items = [4005000, 4005001, 4005002, 4005003, 4005004];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;
            if (select == 0) {
                var matSet = [[4010000], [4010001], [4010002], [4010003], [4010004], [4010005], [4010006], [4010007]];
                var matSetQty = [[10], [10], [10], [10], [10], [10], [10], [10]];
                var costSet = [300, 300, 300, 500, 500, 500, 800, 800];
            }
            if (select == 1) {
                var matSet = [[4020000], [4020001], [4020002], [4020003], [4020004], [4020005], [4020006], [4020007], [4020008]];
                var matSetQty = [[10], [10], [10], [10], [10], [10], [10], [10], [10]];
                var costSet = [500, 500, 500, 500, 500, 500, 500, 1000, 3000];
            }
            if (select == 2) {
                var matSet = [[4004000], [4004001], [4004002], [4004003], [4004004]];
                var matSetQty = [[10], [10], [10], [10], [10]];
                var costSet = [5000, 5000, 5000, 5000, 1000000];
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
            cm.gainItem(item, qty);
            cm.sendOk("像往常一樣，是一件完美的東西。");
            cm.dispose();
    }
}
