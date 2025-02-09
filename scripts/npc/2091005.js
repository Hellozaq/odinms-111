/*
     名字：蕭公
     地图：武陵道場入口
     描述：925020001
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
            if (status < 5) {
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
            var chat = "#e<武陵道場>#n\r\n\r\n";
            if (cm.getPlayer().getMap().getId() == 925020001) {
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150100)).getCustomData() == null) {
                    chat += "\r\n嘿！！說你呢，看這邊……這是第一次來這裡吧？我師傅不想見任何人，他很忙，從你的外貌來看，我想他不會在意的，哈……哈……哈哈！但是，今天你很幸運……我告訴你，如果你可以擊敗我，我會讓你去見見師傅，你覺得怎麼樣？";
                    chat += "\r\n#L0#接受挑戰";
                }
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150100)).getCustomData() != null) {
                    chat += "我師傅是武陵最強大的，你想要踢館？好吧，你一定會後悔的。#b";
                    chat += "\r\n#L1##v3994115#";
                    chat += "#L2##v3994116#";
                    chat += "#L3##v3994117#";
                    chat += "\r\n#L4#兌換腰帶";
                    chat += "\r\n#L5#武陵訓練塔是什麼";
                }
            }
            if (isRestingSpot(cm.getPlayer().getMap().getId())) {
                chat += "真沒想到你可以挑戰到這裡，但是從現在開始就沒那麼容易了，要繼續挑戰嗎？";
                chat += "\r\n#L6#繼續戰鬥";
                chat += "\r\n#L7#記錄目前的成績";
            }
            if (cm.getPlayer().getMap().getId() != 925020001) {
                chat += "\r\n#L8#離開這裡";
            }
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                if (cm.getMap(925020010).getCharacters().size() > 0) {
                    cm.sendOk("請稍等一下，現在沒有空餘的道場。");
                    cm.dispose();
                    return;
                }
                cm.getMap(925020010).resetFully();
                cm.getPlayer().changeMap(cm.getMap(925020010), cm.getMap(925020010).getPortal(0));
                cm.dispose();
                return;
            }
            if (selection <= 3) {
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150100)).setCustomData(selection < 2 ? 1 : selection < 3 ? 2 : 3);
                if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).getCustomData() == null) {
                    cm.start_DojoAgent(true, false);
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("我的小本子裡記錄了你的上一次個人挑戰，去了#b#m" + cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).getCustomData() + "##k層，我現在可以讓你直接繼續挑戰，要跳過前面的關卡嗎？");
            }
            if (selection == 4) {
                var chat = "我們的師傅喜歡有天賦的人，所以如果你在道場內獲得了一定數量的武公的象徵，你就可以在我這裡換取一條合適你的腰帶。到目前為止，持有的武公的象徵：#b" + cm.getPlayer().itemQuantity(4001620) + "";
                chat += "\r\n#L0##v1132112:# #t1132112#(武公的象徵需要50個)";
                chat += "\r\n#L1##v1132113:# #t1132113#(武公的象徵需要100個)";
                chat += "\r\n#L2##v1132114:# #t1132114#(武公的象徵需要200個)";
                chat += "\r\n#L3##v1132115:# #t1132115#(武公的象徵需要250個)";
                cm.sendSimple(chat);
            }
            if (selection == 5) {
                cm.sendOk("我的師父是武陵最有力量的人，他負責創建這座神奇的武陵訓練塔，武陵訓練塔是一座由47層組成的大型訓練設施，每一層代表著額外的難度。當然，以你的技能，到達頂層是不可能的。");
                cm.dispose();
            }
            if (selection == 6) {
                cm.dojoAgent_NextMap(true, true);
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).setCustomData(null);
                cm.dispose();
            }
            if (selection == 7) {
                cm.sendYesNo("如果你記錄下目前的成績，下次你再來武林道場挑戰的時候，可以接著從#b#m" + cm.getPlayer().getMap().getId() + "##k開始，你想記錄當前的成績嗎？");
            }
            if (selection == 8) {
                cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
            }
            select = selection;
            break;
        case 2:
            if (select <= 3) {
                map = parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).getCustomData());
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).setCustomData(null);
                cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
                cm.dispose();
            }
            if (select == 4) {
                item = [1132112, 1132113, 1132114, 1132115];
                qty = [50, 100, 200, 250];
                if (cm.getPlayer().itemQuantity(4001620) < qty[selection]) {
                    cm.sendOk("#b#t" + item[selection] + "##k需要" + qty[selection] + "個武公的象徵哦。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001620, -qty[selection]);
                cm.gainItem(item[selection], 1);
                cm.dispose();
                return;
            }
            if (select == 7) {
                cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(150101)).setCustomData(cm.getPlayer().getMap().getId());
                cm.sendOk("我用小本子記錄了你這次的挑戰成績，請注意，如果你選擇繼續挑戰，你的記錄將被刪除，因此請謹慎選擇。");
                cm.dispose();
            }
            if (select == 8) {
                cm.getPlayer().changeMap(cm.getMap(925020002), cm.getMap(925020002).getPortal(0));
                cm.dispose();
            }
    }
}

function isRestingSpot(id) {
    return (Math.floor(id / 100) % 100) % 6 == 0 && id != 925020001;
}
