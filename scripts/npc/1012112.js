/*
     名字：達爾利
     地图：邱比特公園
     描述：100000200
 */

var item = new Array(1472010, 1402010, 1382001, 1452000, 1302026, 1472023, 1472019, 1472022, 1102011, 1472033, 1402017, 1442009, 1472013, 1472021, 1472075, 2000004, 1382005, 1332030, 1432001, 2044901, 2044902, 1422025, 1442015, 1432017, 1442025, 1312004, 1322015, 1462005, 1312012, 1302003, 1442004, 1302028, 1402006, 1322000, 2022195, 1412001, 1372002, 1472009, 1422001, 1462000, 1412004, 1452008, 1432016, 1302021, 4000176, 1442000, 2000005, 2022113, 1432013, 1322024, 1322012, 1302012, 1102028, 1452006, 1302013, 1462007, 1332016, 2043102, 2043112, 2044101, 2044002, 2044001, 2041011, 2041010, 2044602, 2044601, 2043305, 2044401, 2044314, 2043702, 2043701, 1432004, 1472054, 1462006, 1472012, 1442010, 1472008, 1472005, 1382006, 1422007, 1332000, 1402000, 1452007, 1402009, 1102029, 1402001, 1372005, 1442021, 2040915, 2040919, 2040920, 2040914, 2041301, 2041304, 2041307, 2041310, 2044803, 2044804);

function start() {
    if (cm.getPlayer().getMap().getId() == 910010500)
        cm.sendSimple("#e<組隊任務：迎月花保護月妙>#n \r\n\r\n傳說只有在滿月時的迎月花山丘才會出現神秘的兔子月妙，想要見到月妙的話，必須把迎月花種子種植到指定的位置，召喚出滿月，才能把月妙引誘出來。若想收集月妙作的年糕，就必須保護月妙不受殘暴的動物們的傷害。\r\n\r\n Number of players: 2~6 \r\n Level range: 20~69 \r\n Time limit: 10minutes\r\n#L0##b進入任務地圖#l\r\n#L1#兌換#z1002798##l");
    else
        cm.sendSimple(cm.getPlayer().getMap().getId() == 100000200 ? "嘿！！你聽說過迎月花保護月妙的活動嗎？如果你能幫我找一些月妙做的年糕，可以在我這裏換到禮品哦。\r\n#L2##b進入#m910010500##l" : "謝謝你，準備好離開了嗎？我為你準備了一份神秘的小禮物，希望你會喜歡。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/5/0# \r\n#L2##b離開這裏#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("如果妳想執行這項任務，請告訴妳的組長與我談話。");
                cm.dispose();
                return;
            }
            var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 20~69 \r\n\r\n";
            var chenhui = 0;
            var party = cm.getPlayer().getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if (party.get(i).getLevel() < 20 || party.get(i).getLevel() > 69 || party.get(i).getMapid() != 910010500 || party.size() < 2) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("HenesysPQ");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.dispose();
                return;
            }
            cm.sendOk("迎月花保護月妙任務正在執行中，請嘗試其他頻道。");
            break;
        case 1:
            if (cm.getPlayer().itemQuantity(4001101) < 10) {
                cm.sendOk("需要10個#v4001101##b#t4001101##k。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(4001101, -10);
            cm.gainItem(1002798, 1);
            break;
        case 2:
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1 && cm.getPlayer().getMap().getId() != 100000200) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(item[Math.floor(Math.random() * item.length)], cm.getPlayer().getMap().getId() != 100000200 ? 1 : 0);
            map = cm.getPlayer().getMap().getId() == 100000200 ? 910010500 : 100000200;
            cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(1));
    }
    cm.dispose();
}
