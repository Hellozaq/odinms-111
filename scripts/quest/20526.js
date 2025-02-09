/*
     名字：重新飼養提提阿那
     地图：奇裡督王台
     描述：130010220
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.dispose();
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
            qm.sendNext("你遺失了你的提提阿那？天哪！你一定要為它們上心啊，因為它們是皇后給我們的禮物！你必須再次接受教育。");
            break;
        case 1:
            qm.sendNextPrev("別把寵物騎獸看成是一種坐騎或交通工具。這些坐騎可以是你的朋友、同伴、情人。它將永遠陪伴著你，這就是為什麼楓之谷的騎士會想擁有自己的坐騎。");
            break;
        case 2:
            qm.sendYesNo("現在，你準備重新養一隻小提提了嗎？讓它作為你餘生的旅行伴侶？");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.gainItem(4220137, qm.getPlayer().itemQuantity(4220137) ? 0 : 1);
            qm.sendPrev("提提阿那的蛋蛋可以通過分享你的日常經驗來養大，等提提阿那完全長大後，請務必來找我，還有一事，我和坎特事先談過，先取回了坎特的特製營養劑，價格不變：#b10000000#k楓幣。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20526).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(20514).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("嘿，在那兒！提提阿那的蛋怎麼樣了？");
            break;
        case 1:
            if (!qm.getPlayer().itemQuantity(4220137)) {
                qm.sendOk("明白了，你丟了提提阿那的蛋，當你撫養一個小提提的時候你需要更加小心！");
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20514)).getCustomData() < 510000) {
                qm.sendOk("哦，目前你的提提阿那的蛋經驗值為" + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20514)).getCustomData() + "，提提阿那的蛋可以通過分享你的日常經驗成長，等蛋長大後，請再來找我吧。");
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getMeso() < 10000000) {
                qm.sendOk("很抱歉，你沒有#b10000000#k楓幣來支付特製營養劑的費用。");
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.sendPrev("很不錯！現在你可以把你的寶貝再次領回去了，記得以後不要在弄丟啦！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1902005# #t1902005# 1");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20526).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220137, -1);
            qm.gainItem(1902005, 1);
            qm.gainMeso(-10000000);
            qm.dispose();
    }
}
