/*
     名字：謝米歐
     地图：海岸草叢區
     描述：120020000
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
            var chat = "你想做自己的武器和手套？如果你沒有經驗的話，製作起來會很麻煩，不如交給我這個20年的老手吧。#b";
            var options = ["做指虎", "做火槍", "做海盜手套"];
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                var chat = "好的，你想做哪一種指節？#b";
                items = [1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 1) {
                var chat = "好的，你想做哪一支槍？#b";
                items = [1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 2) {
                var chat = "好的，你想做哪一種手套？#b";
                items = [1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;

            if (select == 0) {
                var matSet = [[4000021], [4011001, 4011000, 4000021, 4003000], [4011000, 4011001, 4003000], [4011000, 4011001, 4000021, 4003000], [4011000, 4011001, 4000021, 4003000], [4011000, 4011001, 4021000, 4000021, 4003000], [4000039, 4011000, 4011001, 4000030, 4000021, 4003000]];
                var matSetQty = [[20], [1, 1, 10, 5], [2, 1, 10], [1, 1, 30, 10], [2, 2, 30, 20], [1, 1, 2, 50, 20], [150, 1, 2, 20, 20, 20]];
                var costSet = [1000, 2000, 5000, 15000, 30000, 50000, 100000];
            }
            if (select == 1) {
                var matSet = [[4011000, 4003000, 4003001], [4011000, 4003000, 4003001, 4000021], [4011000, 4003000], [4011001, 4000021, 4003000], [4011006, 4011001, 4000021, 4003000], [4011004, 4011001, 4000021, 4003000], [4011006, 4011004, 4011001, 4000030, 4003000]];
                var matSetQty = [[1, 5, 1], [1, 10, 5, 10], [2, 10], [2, 10, 10], [10, 2, 5, 10], [1, 2, 10, 20], [1, 2, 4, 30, 30]];
                var costSet = [1000, 2000, 5000, 15000, 30000, 50000, 100000];
            }
            if (select == 2) {
                var matSet = [[4000021, 4021003], [4000021], [4011000, 4000021], [4021006, 4000021, 4003000], [4011000, 4000021, 4003000], [4000021, 4011000, 4011001, 4003000], [4011000, 4000021, 4000030, 4003000], [4011007, 4021008, 4021007, 4000030, 4003000]];
                var matSetQty = [[15, 1], [35], [2, 20], [2, 50, 10], [3, 60, 15], [80, 3, 3, 25], [3, 20, 40, 30], [1, 1, 1, 50, 50]];
                var costSet = [1000, 8000, 15000, 25000, 30000, 40000, 50000, 70000];
            }
            item = items[selectItem];
            mat = matSet[selectItem];
            matQty = matSetQty[selectItem];
            cost = costSet[selectItem];

            var chat = "你想製作";
            chat += "#t" + item + "#？";
            chat += "我需要你提供足夠的材料才能完成。#b";
            for (var i = 0; i < mat.length; i++)
                chat += "\r\n#v" + mat[i] + "#" + (matQty[i] * 1) + "#t" + mat[i] + "#";
            chat += "\r\n#v4031138#" + (cost * 1) + "楓幣";
            cm.sendYesNo(chat);
            break;
        case 3:
            for (var i = 0; i < mat.length; i++)
                if (cm.getPlayer().itemQuantity(mat[i]) < matQty[i] * 1) {
                    cm.sendOk("很抱歉，你所提供的材料不能滿足製作要求。");
                    cm.dispose();
                    return;
                }
            if (cm.getPlayer().getMeso() < (cost * 1)) {
                cm.sendOk("很抱歉，请确定一下您有#b" + cost + "#k楓幣嗎？");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            for (var i = 0; i < mat.length; i++)
                cm.gainItem(mat[i], -matQty[i] * 1);
            cm.gainMeso(-cost * 1);
            cm.gainItem(item, 1);
            cm.sendOk("完成了~看看我的手藝。");
            cm.dispose();
    }
}
