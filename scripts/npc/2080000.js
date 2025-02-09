/*
     名字：摩斯
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
            var chat = "如果你有興趣升級或修理你的武器，你肯定會來對地方了！我是神木村最好武器製造商，也會製作龍之力的武器哦。#b"
            var options = new Array("什麼是催化劑?", "製作戰士武器", "製作弓箭手武器", "製作法師武器", "製作飛俠武器", "製作海盜武器", "製作戰士武器使用催化劑", "製作弓箭手武器使用催化劑", "製作法師武器使用催化劑", "製作飛俠武器使用催化劑", "製作海盜武器使用催化劑");
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7301)).getStatus() == 1 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7303)).getStatus() == 1)
                options.push("製作#t4001078#");
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
            if (selection == 1 || selection == 6) {
                var chat = "想要製作那一種戰士武器？#b";
                items = [1302059, 1312031, 1322052, 1402036, 1412026, 1422028, 1432038, 1442045];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 2 || selection == 7) {
                var chat = "想要製作那一種弓箭手武器？#b";
                items = [1452044, 1462039];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 3 || selection == 8) {
                var chat = "想要製作那一種魔術師武器？#b";
                items = [1372032, 1382036];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 4 || selection == 9) {
                var chat = "想要製作那一種盜賊武器？#b";
                items = [1332049, 1332050, 1472051];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 5 || selection == 10) {
                var chat = "想要製作那一種海盜武器？#b";
                items = [1482013, 1492013];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            if (selection == 11) {
                var chat = "你是想潛入這些蜥蜴所在地拯救摩伊拉嗎？我會盡我所能幫助你的，請你準備一些材料，我會為你製作一個幾乎相同的#t4001078#。";
                items = [4001078];
                for (var i = 0; i < items.length; i++)
                    chat += "\r\n#L" + i + "##z" + items[i] + "##l";
            }
            select = selection;
            cm.sendSimple(chat);
            break;
        case 2:
            selectItem = selection;
            if (select == 1 || select == 6) {
                var matSet = [[1302056, 4000244, 4000245, 4005000], [1312030, 4000244, 4000245, 4005000], [1322045, 4000244, 4000245, 4005000], [1402035, 4000244, 4000245, 4005000], [1412021, 4000244, 4000245, 4005000], [1422027, 4000244, 4000245, 4005000], [1432030, 4000244, 4000245, 4005000], [1442044, 4000244, 4000245, 4005000]];
                var matSetQty = [[1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8], [1, 20, 25, 8]];
                var costSet = [120000, 120000, 120000, 120000, 120000, 120000, 120000, 120000];
                var stimID = [4130002, 4130003, 4130004, 4130005, 4130006, 4130007, 4130008, 4130009];
            }
            if (select == 2 || select == 7) {
                var matSet = [[1452019, 4000244, 4000245, 4005000, 4005002], [1462015, 4000244, 4000245, 4005000, 4005002]];
                var matSetQty = [[1, 20, 25, 3, 5], [1, 20, 25, 5, 3]];
                var costSet = [120000, 120000];
                var stimID = [4130012, 4130013];
            }
            if (select == 3 || select == 8) {
                var matSet = [[1372010, 4000244, 4000245, 4005001, 4005003], [1382035, 4000244, 4000245, 4005001, 4005003]];
                var matSetQty = [[1, 20, 25, 6, 2], [1, 20, 25, 6, 2]];
                var costSet = [120000, 120000];
                var stimID = [4130010, 4130011];
            }
            if (select == 4 || select == 9) {
                var matSet = [[1332051, 4000244, 4000245, 4005000, 4005002], [1332052, 4000244, 4000245, 4005002, 4005003], [1472053, 4000244, 4000245, 4005002, 4005003]];
                var matSetQty = [[1, 20, 25, 5, 3], [1, 20, 25, 3, 5], [1, 20, 25, 2, 6]];
                var costSet = [120000, 120000, 120000];
                var stimID = [4130014, 4130014, 4130015];
            }
            if (select == 5 || select == 10) {
                var matSet = [[1482012, 4000244, 4000245, 4005000, 4005002], [1492012, 4000244, 4000245, 4005000, 4005002]];
                var matSetQty = [[1, 20, 25, 5, 3], [1, 20, 25, 3, 5]];
                var costSet = [120000, 120000];
                var stimID = [4130016, 4130017];
            }
            if (select == 11) {
                var matSet = [[4011001, 4011002, 4001079]];
                var matSetQty = [[1, 1, 1]];
                var costSet = [0];
                var stimID = [0];
            }
            item = items[selectItem];
            mat = matSet[selectItem];
            matQty = matSetQty[selectItem];
            cost = costSet[selectItem];
            stimID = stimID[selectItem];

            var chat = "你想製作";
            chat += "#t" + item + "#？";
            chat += "我需要你提供足夠的材料才能完成。#b";
            for (var i = 0; i < mat.length; i++)
                chat += "\r\n#v" + mat[i] + "#" + (matQty[i] * 1) + "#t" + mat[i] + "#";
            chat += select > 5 && select < 11 ? "\r\n#v" + stimID + "# 1 #t" + stimID + "#" : "";
            chat += "\r\n#v4031138#" + (cost * 1) + "楓幣";
            cm.sendYesNo(chat);
            break;
        case 3:
            for (var i = 0; i < mat.length; i++)
                if (cm.getPlayer().itemQuantity(mat[i]) < matQty[i] * 1 || (select > 5 && select < 11 && !cm.getPlayer().itemQuantity(stimID))) {
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
            if (select > 5 && select < 11) {
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
            cm.sendOk("請拿好你的新武器。");
            cm.dispose();
    }
}
