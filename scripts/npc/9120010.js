/*
     名字：伏特加
     地图：昭和商店街
     描述：801000300
 */

var item = [4000064, 4000065, 4000066, 4000075, 4000077, 4000089, 4000090, 4000091, 4000092, 4000093, 4000094];
var Prizes = [2022042, 2022043, 2022060, 2022061, 2022062, 2022068, 2022069, 2022071, 2022072, 2022073, 2022094, 2022100, 2022101, 2022102, 2022112, 2022119, 2022153, 2022154, 2022156, 2022179, 2022181, 2022182, 2022185, 2022189, 2022190, 2022193, 2022194, 2022195, 2022265, 2022280, 2022285];
var num = [1, 1, 1, 4, 2, 2, 2, 2, 4, 4, 6];

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
            var chat = "如果您收集了100個相同的項目，然後我可能會與類似的東西進行交換。什麼？您可能不知道，但我信守諾言，所以您不必擔心。現在，我們交換好嗎？#b"
            for (var i = 0; i < item.length; i++)
                chat += "\r\n#L" + i + "##v" + item[i] + "##z" + item[i] + "##l";
            cm.sendSimple(chat);
            break;
        case 1:
            select = selection;
            cm.sendYesNo("你確定用#r100#k個#b#t" + item[selection] + "##k和我交換，對嗎？");
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(item[select]) < 100) {
                cm.sendOk("嘿，你以為你在幹什麼？你所提供的#t" + item[select] + "#數量不足！");
                cm.dispose();
                return;
            }
            itemid = Math.floor(Math.random() * Prizes.length);
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.sendOk("哦！很不錯，如果你能繼續為我供貨，隨時來找我。");
            cm.gainItem(item[select], -100);
            cm.gainExp(100 * cm.getPlayer().getLevel());
            cm.gainItem(Prizes[itemid], num[select]);
            cm.dispose();
    }
}
