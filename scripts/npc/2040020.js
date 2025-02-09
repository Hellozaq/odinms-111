/*
     名字：吉羅根
     地图：吉羅根與蓓依的家
     描述：220000303
 */

var stimID = 4130000;

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
            var chat = "您好，歡迎來到玩具城手套店，我今天能幫你什麼忙？#b"
            var options = new Array("什麼是催化劑?", "做一雙戰士手套", "做一雙弓箭手手套", "做一雙法師手套", "做一雙盜賊手套", "做一雙戰士手套使用催化劑", "做一雙弓箭手手套使用催化劑", "做一雙法師手套使用催化劑", "做一雙盜賊手套使用催化劑");
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                cm.sendOk("催化劑是一種特殊的藥劑，我可以添加到製作某些物品的過程中，雖然可以起到強化物品的作用，但是催化劑也是具有高風險的，製造出來的物品屬性是隨機的，也有#b10%的幾率#k會一無所獲，所以請明智地選擇。");
                cm.dispose();
                return;
            }
            if (selection == 1 || selection == 5) {
                var chat = "想要製作那一種戰士手套？#b";
                items = [1082007, 1082008, 1082023, 1082009];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 2 || selection == 6) {
                var chat = "想要製作那一種弓箭手手套？#b";
                items = [1082048, 1082068, 1082071, 1082084];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 3 || selection == 7) {
                var chat = "想要製作那一種魔術師手套？#b";
                items = [1082051, 1082054, 1082062, 1082081];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 4 || selection == 8) {
                var chat = "想要製作那一種盜賊手套？#b";
                items = [1082042, 1082046, 1082075, 1082065];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;
            if (select == 1 || select == 5) {
                var matSet = [[4011000, 4011001, 4003000], [4000021, 4011001, 4003000], [4000021, 4011001, 4003000], [4011001, 4021007, 4000030, 4003000]];
                var matSetQty = [[3, 2, 15], [30, 4, 15], [50, 5, 40], [3, 2, 30, 45]];
                var costSet = [18000, 27000, 36000, 45000];
            }
            if (select == 2 || select == 6) {
                var matSet = [[4000021, 4011006, 4021001], [4011000, 4011001, 4000021, 4003000], [4011001, 4021000, 4021002, 4000021, 4003000], [4011004, 4011006, 4021002, 4000030, 4003000]];
                var matSetQty = [[50, 2, 1], [1, 3, 60, 15], [3, 1, 3, 80, 25], [3, 1, 2, 40, 35]];
                var costSet = [18000, 27000, 36000, 45000];
            }
            if (select == 3 || select == 7) {
                var matSet = [[4000021, 4021006, 4021000], [4000021, 4011006, 4011001, 4021000], [4000021, 4021000, 4021006, 4003000], [4021000, 4011006, 4000030, 4003000]];
                var matSetQty = [[60, 1, 2], [70, 1, 3, 2], [80, 3, 3, 30], [3, 2, 35, 40]];
                var costSet = [22500, 27000, 36000, 45000];
            }
            if (select == 4 || select == 8) {
                var matSet = [[4011001, 4000021, 4003000], [4011001, 4011000, 4000021, 4003000], [4021000, 4000101, 4000021, 4003000], [4021005, 4021008, 4000030, 4003000]];
                var matSetQty = [[2, 50, 10], [3, 1, 60, 15], [3, 100, 80, 30], [3, 1, 40, 30]];
                var costSet = [22500, 27000, 36000, 45000];
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
            chat += select > 4 ? "\r\n#v" + stimID + "# 1 #t" + stimID + "#" : "";
            chat += "\r\n#v4031138#" + (cost * 1) + "楓幣";
            cm.sendYesNo(chat);
            break;
        case 3:
            for (var i = 0; i < mat.length; i++)
                if (cm.getPlayer().itemQuantity(mat[i]) < matQty[i] * 1 || (select > 4 && !cm.getPlayer().itemQuantity(stimID))) {
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
            if (select > 4) {
                cm.gainItem(stimID, -1);
                var deleted = Math.floor(Math.random() * 10);
                if (deleted != 0) {
                    cm.gainItem(item, 1, true);
                    cm.sendOk("你的運氣很好，製作的過程沒有任何問題。");
                    cm.dispose();
                    return;
                }
                cm.sendOk("很抱歉，由於使用催化劑失敗，資料全部報廢。");
                cm.dispose();
                return;
            }
            cm.gainMeso(-cost * 1);
            cm.gainItem(item, 1);
            cm.sendOk("請拿好你的新手套。");
            cm.dispose();
    }
}
