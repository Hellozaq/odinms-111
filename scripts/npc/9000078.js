/*
     名字：楊恩
     地图：黃金寺廟
     描述：950100000
 */

function start() {
    var chat = "歡迎來到黃金寺廟，你是否已持有參觀卷，我這裡可以提供優惠的價格。#b";
    chat += "\r\n#L0#\t\t使用10张#z4032605#兌換#z4001431#";
    chat += "\r\n#L1##v4001431##t4001431##k#b1000000楓幣";
    chat += "\r\n#L2##v4001432##t4001432##k#b3000000楓幣（1小時內無限制入場）";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        if (selection == 0) {
            if (cm.getPlayer().itemQuantity(4032605) < 10) {
                cm.sendOk("很抱歉，兌換#t4001431#需要10張#t4001431#。");
                cm.dispose();
                return;
            }
            cm.gainItem(4032605, -10);
            cm.gainItem(4001431, 1);
            cm.sendOk("謝謝惠顧，希望你的旅途愉快。");
            return;
        }
        if (cm.getPlayer().getMeso() < (selection == 1 ? 1000000 : 3000000)) {
            cm.sendOk("很抱歉，請確定一下您有足夠的楓幣嗎？");
            cm.dispose();
            return;
        }
        cm.gainMeso(-(selection == 1 ? 1000000 : 3000000));
        cm.gainItem(selection == 1 ? 4001431 : 4001432, 1, selection == 1 ? -1 : 1);
        cm.sendOk("謝謝惠顧，希望你的旅途愉快。");
    }
    cm.dispose();
}
