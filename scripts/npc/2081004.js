/*
     名字：潘姆
     地图：潘姆之家
     描述：240000006
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
            if (status < 2) {
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
            var chat = "你是來聽我唱歌的嗎？你遇到了一些關於騎寵的問題，想要讓我幫忙？#b"
            item = ["製作#t4032196#", "製作#t4032197#", "製作#t4032198#"];
            for (var i = 0; i < item.length; i++)
                chat += "\r\n#L" + i + "#" + item[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            selectItem = selection;

            item = [4032196, 4032197, 4032198];
            var matSet = [[4000236, 4000237, 4000238], [4000239, 4000241, 4000242], [4000262, 4000263, 4000265]];
            var matSetQty = [[30, 30, 30], [30, 30, 30], [30, 30, 30]];
            var costSet = [2000000, 3000000, 4000000];

            item = item[selectItem];
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
        case 2:
            for (var i = 0; i < mat.length; i++)
                if (cm.getPlayer().itemQuantity(mat[i]) < matQty[i] * 1) {
                    cm.sendOk("很抱歉，你所提供的材料不能滿足製作要求。");
                    cm.dispose();
                    return;
                }
            if (cm.getPlayer().getMeso() < (cost * 1)) {
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
                cm.gainItem(mat[i], -matQty[i] * 1);
            cm.gainMeso(-cost * 1);
            cm.gainItem(item, 1);
            cm.sendOk("製作完成，請收好你的#b#t" + item + "##k，希望你能夠妥善運用它。");
            cm.dispose();
    }
}
