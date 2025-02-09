/*
     名字：雨揚
     地图：雨揚的感謝
     描述：925100600
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
            if (cm.getPlayer().getMap().getId() == 925100500) {
                cm.sendYesNo("嗚嗚！！沒想到你們會來救我，看來爺爺還是很疼愛我這個孫子的。非常感謝你的幫助，請收下這份值得紀念的禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001455# #t4001455# 1");
            }
            if (cm.getPlayer().getMap().getId() == 925100600) {
                var chat = "大人，謝謝你的幫助，讓我擺脫了海盜的魔手，我會記住你的大恩大德，如果你有多餘的海賊王帽子碎塊，我可以為你做一些物品。#b";
                item = ["製作#z1002571#", "製作#z1002572#", "製作#z1002573#", "製作#z1002574#", "離開這裡"];
                for (var i = 0; i < item.length; i++)
                    chat += "\r\n#L" + i + "#" + item[i] + "#l";
                cm.sendSimple(chat);
            }
            break;
        case 1:
            if (cm.getPlayer().getMap().getId() == 925100500) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.getPlayer().changeMap(cm.getMap(925100600), cm.getMap(925100600).getPortal(0));
                cm.gainItem(4001455, 1);
                cm.dispose();
                return;
            }
            if (selection < 4) {
                item = [1002571, 1002572, 1002573, 1002574];
                qty = [10, 20, 40, 60];
                cm.sendYesNo("想要製作#z" + item[selection] + "#，提供足夠的材料就沒問題。\r\n\r\n#v4001455# #t4001455# " + qty[selection] + "");
            }
            if (selection > 3) {
                cm.getPlayer().changeMap(cm.getMap(925100700), cm.getMap(925100700).getPortal(0));
                cm.dispose();
                return;
            }
            select = selection;
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(4001455) < qty[select]) {
                cm.sendOk("很抱歉，你所提供的材料不能滿足製作要求。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4001455, -qty[select]);
            cm.gainItem(item[select], 1);
            cm.sendOk("#h0#大人，請拿好你的#z" + item[select] + "#。");
            cm.dispose();
    }
}
