/*
     名字：飼養提提阿那
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
            qm.sendNext("騎士們的騎乘，是一種生長在島上的提提——提提阿那。騎士可以騎乘提提阿那，進行快速的移動，以增加工作效率。");
            break;
        case 1:
            qm.sendNextPrev("騎乘並不只是坐騎，如果你覺得它只是移動幫手就錯了。騎乘是朋友、同伴、情人……可以是這所有的一切。偶爾它也可以救你的命，所以耶雷弗的騎士們都自己馴養騎寵。");
            break;
        case 2:
            qm.sendYesNo("#v4220137#……看，這是一個提提阿那的蛋。你準備好養一隻小提提了嗎？讓它作為你餘生的旅行伴侶？");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.gainItem(4220137, qm.getPlayer().itemQuantity(4220137) ? 0 : 1);
            qm.sendPrev("提提阿那的蛋可以通過分享你的日常經驗成長，提提阿那的蛋長大後，請再來找我。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(20522).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
                qm.sendOk("我明白了，你丟了你的蛋……當你撫養一個小提提的時候你需要更加小心！你可以選擇#b放弃#k任務，在重新#b領取#k一枚！");
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20514)).getCustomData() < 510000) {
                qm.sendOk("哦，目前你的提提阿那的蛋經驗值為" + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20514)).getCustomData() + "，提提阿那的蛋可以通過分享你的日常經驗成長，等蛋長大後，請再來找我吧。");
                qm.dispose();
                return;
            }
            qm.sendPrev("哦，你能喚醒提提阿那的蛋嗎？太神奇了……大多數騎士都無法在這麼短的時間內喚醒它。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 37600 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20522).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220137, -1);
            qm.gainExp(37600);
            qm.dispose();
    }
}
