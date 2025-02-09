/*
     名字：鳩克
     地图：亡者峽谷
     描述：610010004
 */

var item = [4032007, 4032006, 4032008, 4032009];
var Prizes = [2022042, 2022043, 2022060, 2022061, 2022062, 2022068, 2022069, 2022071, 2022072, 2022073, 2022094, 2022100, 2022101, 2022102, 2022112, 2022119, 2022153, 2022154, 2022156, 2022179, 2022181, 2022182, 2022185, 2022189, 2022190, 2022193, 2022194, 2022195, 2022265, 2022280, 2022285];

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
            var chat = "你好，我是約庫，如果你有收集到100個項目，我可以用其它的東西與你交換，怎麼樣？#b"
            for (var i = 0; i < item.length; i++)
                chat += "\r\n#L" + i + "##v" + item[i] + "##z" + item[i] + "##l";
            cm.sendSimple(chat);
            break;
        case 1:
            select = selection;
            cm.sendYesNo("你確定用#r100#k#b#t" + item[selection] + "##k和我交換，對嗎？");
            break;
        case 2:
            if (select == 0 || select == 1) {
                x = 4;
            }
            if (select == 2 || select == 3) {
                x = 6;
            }
            itemid = Math.floor(Math.random() * 4);
            if (cm.getPlayer().itemQuantity(item[select]) < 100) {
                cm.sendOk("嘿，夥計！你所提供的#t" + item[select] + "#數量不足！");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.sendOk("哦！夥計！！你太棒了，我想我們可能會成為好朋友。");
            cm.gainItem(item[select], -100);
            cm.gainExp(100 * cm.getPlayer().getLevel());
            cm.gainItem(Prizes[itemid], x);
            cm.dispose();
    }
}
