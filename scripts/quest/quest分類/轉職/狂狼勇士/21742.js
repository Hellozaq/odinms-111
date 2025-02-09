/*
     名字：空白的卷軸
     地图：桃花仙境
     描述：250000000
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("雖說也不是什麼著急的活兒，不過你這麼問總讓人覺得有些不爽。我是不是應該讓你下次再來找我呢？反正沒什麼事情，就請讓我清淨一點行嗎？");
            break;
        case 1:
            qm.sendNextPrevS("我聽說你見過黑色翅膀的武士……");
            break;
        case 2:
            qm.sendNextPrev("啊……你是說一身漆黑，眉宇間皺紋很深的那個男人嗎？是見過。不但見過而且他有東西放在我這裡，讓我轉交給#b#p2091007##k老頭子。");
            break;
        case 3:
            qm.sendNextPrevS("東西？");
            break;
        case 4:
            qm.sendNextPrev("嗯，好大一個字畫塞給我，讓我一定要轉交。他一臉殺氣的，好像我不轉交的話，他還會來找我似的。哎呦，真是嚇死人了。");
            break;
        case 5:
            qm.sendNextPrevS("然後呢，#b#z4220151##k轉交出去了嗎？");
            break;
        case 6:
            qm.sendNextPrev("沒有，那個……其實出了點問題……你願意聽我說嗎？");
            break;
        case 7:
            qm.sendNextPrev("是這樣的，我正在做一種新藥水，當時正好在煮草藥，結果沒想到字畫一下子掉了進去。我雖然以最快速度把它撈了出來，不過#t4220151#浸水後，上面的字都消失了。");
            break;
        case 8:
            qm.sendPrev("於是我就發愁了，這怎麼轉交給武公老頭子啊。於是我決定先把字畫修復好，再轉交給他。正好你能幫我一個忙。去找桃花仙境最有名的畫師#b#p2091008##k，他一定會知道怎麼修復#t4220151#的。");
            break;
        case 9:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21742).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(21763).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.gainItem(4220151, qm.getPlayer().itemQuantity(4220151) ? 0 : 1);
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
            qm.sendNext("字迹顯示出來了！上面寫著：我會取走桃花仙境的封印石。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21742).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220151, -1);
            qm.gainExp(10000);
            qm.dispose();
    }
}
