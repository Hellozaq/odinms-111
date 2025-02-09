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
                if (cm.getInfoQuest(2091005).equals("")) {
                    chat += "\r\n嘿！！說你呢，看這邊……這是第一次來這裡吧？我師傅不想見任何人，他很忙，從你的外貌來看，我想他不會在意的，哈……哈……哈哈！但是，今天你很幸運……我告訴你，如果你可以擊敗我，我會讓你去見見師傅，你覺得怎麼樣？";
                    chat += "\r\n#L0#接受挑戰";
                }
                if (cm.getInfoQuest(2091005).equals("1")) {
                    chat += "我師傅是武陵最強大的，你想要踢館？好吧，你一定會後悔的。#b";
                    chat += "\r\n#L1#單人挑戰";
                    chat += "\r\n#L2#組隊進入";
                    chat += "\r\n#L3#兌換腰帶";
                    chat += "\r\n#L4#重置我的訓練點";
                    chat += "\r\n#L5#武陵訓練塔是什麼";
                }
            }
            if (isRestingSpot(cm.getPlayer().getMap().getId())) {
                if (cm.getMap().getCharacters().size() != 1 && !cm.isLeader()) {
                    cm.sendOk("你想幹什麼，讓你的小組組長與我談話。");
                    cm.dispose();
                    return;
                }
                chat += "真沒想到你可以挑戰到這裡，但是從現在開始就沒那麼容易了，要繼續挑戰嗎？";
                chat += "\r\n#L6#繼續戰鬥";
                if (cm.getMap().getCharacters().size() == 1 && !cm.isLeader()) {
                    chat += "\r\n#L7#記錄目前的成績";
                }
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
            }
            if (selection == 1) {
                if (cm.getParty() != null) {
                    cm.sendOk("嘿！！你是不是弄錯了，單人挑戰是不允許組隊進入的。");
                    cm.dispose();
                    return;
                }
                if (cm.getQuestRecord(150000).getCustomData() == null) {
                    cm.start_DojoAgent(true, false);
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("我的小本子裡記錄了你的上一次個人挑戰，去了#b#m" + cm.getQuestRecord(150000).getCustomData() + "##k層，我現在可以讓你直接繼續挑戰，要跳過前面的關卡嗎？");
            }
            if (selection == 2) {
                if (cm.getParty() != null) {
                    cm.sendNext("你想幹什麼？你都不是小組組長！");
                    cm.dispose();
                    return;
                }
                if (!cm.isLeader()) {
                    cm.sendNext("你覺得你能去哪裡？你都不是小組組長！");
                    cm.dispose();
                    return;
                }
                cm.start_DojoAgent(true, true);
                cm.dispose();
            }
            if (selection == 3) {
                var chat = "我們的師傅喜歡有天賦的人，所以如果你獲得了一定的訓練點數，你就可以根據你的訓練點數獲得一條腰帶。到目前為止，你的總訓練分數為：#b" + cm.getDojoPoints() + "";
                chat += "\r\n#L0##v1132000# #t1132000#(200)";
                chat += "\r\n#L1##v1132001# #t1132001#(1800)";
                chat += "\r\n#L2##v1132002# #t1132002#(4000)";
                chat += "\r\n#L3##v1132003# #t1132003#(9200)";
                chat += "\r\n#L4##v1132004# #t1132004#(17000)";
                cm.sendSimple(chat);
            }
            if (selection == 4) {
                cm.sendYesNo("老實說，你知道如果你重置你的訓練點，那麼它會回到#b 0#k，對嗎？這不一定是壞事，如果重新開始，你將可以再次收到腰帶，是否要重置訓練點？");
            }
            if (selection == 5) {
                cm.sendOk("我的師父是武陵最有力量的人，他負責創建這座神奇的武陵訓練塔，武陵訓練塔是一座由38層組成的大型訓練設施，每一層代表著額外的難度。當然，以你的技能，到達頂層是不可能的。");
                cm.dispose();
            }
            if (selection == 6) {
                cm.dojoAgent_NextMap(true, true);
                cm.getQuestRecord(150000).setCustomData(null);
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
            if (select == 1) {
                map = parseInt(cm.getQuestRecord(150000).getCustomData());
                cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
                cm.getQuestRecord(150000).setCustomData(null);
                cm.dispose();
            }
            if (select == 3) {
                var record = cm.getDojoRecord();
                required = record == 0 ? 200 : record == 1 ? 1800 : record == 2 ? 4000 : record == 3 ? 9200 : 17000;

                if (record == selection && cm.getDojoPoints() >= required) {
                    var item = 1132000 + record;
                    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                        cm.playerMessage(1, "裝備道具視窗的欄位不足。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(item, 1);
                    cm.setDojoRecord(false);
                    cm.dispose();
                    return;
                }
                cm.sendOk("你要麼已經擁有它，要麼訓練點數不足，一定要先試著換上較弱的皮帶。");
                cm.dispose();
            }
            if (select == 4) {
                cm.setDojoRecord(true);
                cm.sendOk("你所有的訓練點數都重置了，把它當作一個新的開始，努力訓練。");
                cm.dispose();
            }
            if (select == 7) {
                cm.getQuestRecord(150000).setCustomData(cm.getPlayer().getMap().getId());
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
