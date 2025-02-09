/*
     名字：慕尼
     地图：結婚小鎮
     描述：680000000
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
            var chat = "你好，我是#p" + cm.getNpc() + "#，戒指製作商人，有什麼事嗎？#b"
            var options = ["製作訂婚戒指", "丟棄訂婚戒指"];
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                for (var i = 2240004; i < 2240014; i++)
                    if (cm.getPlayer().itemQuantity(i)) {
                        cm.sendOk("很抱歉，你已經有#b訂婚戒指#k了，恐怕我不能為你服務。");
                        cm.dispose();
                        return;
                    }
                if (cm.getPlayer().getGender() != 0) {
                    cm.sendOk("對不起，訂婚戒指只有#b男款#k的。");
                    cm.dispose();
                    return;
                }
                var chat = "那麼，你想讓我做什麼樣的訂婚戒指呢？#b"
                options = [2240004, 2240007, 2240010, 2240013];
                for (var i = 0; i < options.length; i++)
                    chat += "\r\n#L" + i + "##z" + options[i] + "##l";
                cm.sendSimple(chat);
            }
            if (selection == 1) {
                for (var i = 2240004; i < 2240014; i++)
                    if (cm.getPlayer().itemQuantity(i)) {
                        cm.removeAll(i);
                        cm.sendOk("你的訂婚戒指已經被#b丟棄#k了。");
                        cm.dispose();
                        return;
                    }
                cm.sendOk("你沒有可以丟棄的#b訂婚戒指#k。");
                cm.dispose();
            }
            break;
        case 2:
            selectItem = selection;
            items = [2240004, 2240007, 2240010, 2240013];
            var matSet = [[4011004, 4021007], [4011006, 4021007], [4011007, 4021007], [4021009, 4021007]];
            var matSetQty = [[1, 1], [1, 1], [1, 1], [1, 1]];
            var costSet = [30000, 50000, 70000, 90000];

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
                    cm.sendOk("很抱歉，你似乎缺少一些製作訂婚戒指的材料，請先提供一下，可以嗎？");
                    cm.dispose();
                    return;
                }
            if (cm.getPlayer().getMeso() < (cost * 1)) {
                cm.sendOk("對不起，我的服務是要收費的，在試著製作戒指之前，請給我適量的楓幣。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            for (var i = 0; i < mat.length; i++)
                cm.gainItem(mat[i], -matQty[i] * 1);
            cm.gainMeso(-cost * 1);
            cm.gainItem(item, 1);
            cm.sendOk("請拿好你的#z" + item + "#，祝你訂婚愉快。");
            cm.dispose();
    }
}
