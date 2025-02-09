/*
     名字：奈夫
     地图：天空之城公園
     描述：200000200
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
            var chat = "你好，我是奈夫，天空之城的頭號匠人，能为你做些什么？#b"
            var options = new Array("做一雙/升級劍士手套", "做一雙/升級弓箭手手套", "做一雙/升級法師手套", "做一雙/升級盜賊手套");
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                var chat = "好的，你想做哪一種戰士手套？#b";
                items = [1082103, 1082104, 1082105, 1082114, 1082115, 1082116, 1082117];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 1) {
                var chat = "好的，你想做哪一種弓箭手手套？#b";
                items = [1082106, 1082107, 1082108, 1082109, 1082110, 1082111, 1082112];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 2) {
                var chat = "好的，你想做哪一種法師手套？#b";
                items = [1082098, 1082099, 1082100, 1082121, 1082122, 1082123];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 3) {
                var chat = "好的，你想做哪一種盜賊手套？#b";
                items = [1082095, 1082096, 1082097, 1082118, 1082119, 1082120];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;

            if (select == 0) {
                var matSet = [[4005000, 4011000, 4011006, 4000030, 4003000], [1082103, 4011002, 4021006], [1082103, 4021006, 4021008], [4005000, 4005002, 4021005, 4000030, 4003000], [1082114, 4005000, 4005002, 4021003], [1082114, 4005002, 4021000], [1082114, 4005000, 4005002, 4021008]];
                var matSetQty = [[2, 8, 3, 70, 55], [1, 6, 4], [1, 8, 3], [2, 1, 8, 90, 60], [1, 1, 1, 7], [1, 3, 8], [1, 2, 1, 4]];
                var costSet = [90000, 90000, 100000, 100000, 110000, 110000, 120000];
            }
            if (select == 1) {
                var matSet = [[4005002, 4021005, 4011004, 4000030, 4003000], [1082106, 4021006, 4011006], [1082106, 4021007, 4021008], [4005002, 4005000, 4021000, 4000030, 4003000], [1082109, 4005002, 4005000, 4021005], [1082109, 4005002, 4005000, 4021003], [1082109, 4005002, 4005000, 4021008]];
                var matSetQty = [[2, 8, 3, 70, 55], [1, 5, 3], [1, 2, 3], [2, 1, 8, 90, 60], [1, 1, 1, 7], [1, 1, 1, 7], [1, 2, 1, 4]];
                var costSet = [90000, 90000, 100000, 100000, 110000, 110000, 120000];
            }
            if (select == 2) {
                var matSet = [[4005001, 4011000, 4011004, 4000030, 4003000], [1082098, 4021002, 4021007], [1082098, 4021008, 4011006], [4005001, 4005003, 4021003, 4000030, 4003000], [1082121, 4005001, 4005003, 4021005], [1082121, 4005001, 4005003, 4021008]];
                var matSetQty = [[2, 6, 6, 70, 55], [1, 6, 2], [1, 3, 3], [2, 1, 8, 90, 60], [1, 1, 1, 7], [1, 2, 1, 4]];
                var costSet = [90000, 90000, 100000, 100000, 110000, 120000];
            }
            if (select == 3) {
                var matSet = [[4005003, 4011000, 4011003, 4000030, 4003000], [1082095, 4011004, 4021007], [1082095, 4021007, 4011006], [4005003, 4005002, 4011002, 4000030, 4003000], [1082118, 4005003, 4005002, 4021001], [1082118, 4005003, 4005002, 4021000]];
                var matSetQty = [[2, 6, 6, 70, 55], [1, 6, 2], [1, 3, 3], [2, 1, 8, 90, 60], [1, 1, 1, 7], [1, 2, 1, 8]];
                var costSet = [90000, 90000, 100000, 100000, 110000, 120000];
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
            cm.sendOk("不錯吧？有需要請再來找我哦~");
            cm.dispose();
    }
}
