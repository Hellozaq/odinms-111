/*
     名字：波
     地图：維多利亞港
     描述：104000000
 */

var Text = [["使用我裝配的這件瘋狂的外星電轉機，任何物品都可以安裝插槽！你可以在插槽裏放置被稱為“星岩”的特殊外星石頭。外星人使用它們來獲取能量，我們同樣也可以使用這些外星石頭為裝備提供特殊能力！"],
    ["星岩是外星人入侵楓之谷世界時攜帶來的小石頭。是一種能量來源。新葉城附近的區域，有一些我迄今為止發現的最好的星岩塊。或許你可以去哪裡找找。"],
    ["我們的普通設備並不是為了利用外星人的力量而製作的，所以我只知道了如何在一件裝備上打作一個插槽，但我正在努力工作，保證能儘快將能量完美轉化。"]];

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
            var chat = "嗨！我是波！是世界上最傑出的外星技術專家，同時也是世界上唯一的外星技術專家！我告訴你，最近我發現一件非常有趣的事情！我稱之為外星星岩插槽。#b";
            var options = ["星岩插槽是什麼", "星岩到底是什麼", "那我應該怎麼做", "購買#z2930000#"];
            for (var i = 0; i < options.length; i++)
                chat += "\r\n#L" + i + "#" + options[i] + "#l";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection < 3) {
                cm.sendOk(Text[selection][mode - 1]);
                cm.dispose();
                return;
            }
            cm.sendGetNumber("你想要購買我的研究產品嗎？實在是太幫了！\r\n(單價: 100000楓幣)", 1, 1, 100);
            break;
        case 2:
            cm.sendYesNo("你要買#b" + selection + "#k個#z2930000#，總價是#b" + (100000 * selection) + "#k楓幣，確定要付款嗎？");
            select = selection;
            break;
        case 3:
            if (cm.getPlayer().getMeso() < 100000 * select) {
                cm.sendOk("你是不是缺楓幣？你至少需要有#b" + (100000 * select) + "#k楓幣。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainMeso(-100000 * select);
            cm.gainItem(2930000, select);
            cm.sendOk("謝謝你，如果你還需要什麼，請再來找我。");
            cm.dispose();
    }
}
