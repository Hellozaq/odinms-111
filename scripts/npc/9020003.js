/*
     名字：小海豚
     地图：危險之海岔道&amp;lt;準備室&gt;
     描述：923040000
 */

function start() {
    var chat = "#e<組隊任務：陷入危險的坎特>#n\r\n\r\n不好了！！坎特好像陷入危險了，他說要親自去調查海洋生物的異常行動，可是出去後就沒回來，肯定是出事了，我得把坎特找回來，請你幫幫忙！\r\n\r\n Number of players: 2~6 \r\n Level range: 120+ \r\n Time limit: 20minutes#b";
    chat += "\r\n#L0#進入任務地圖";
    chat += "\r\n#L1#兌換#z1022123# (50 Pianus Scale)";
    chat += "\r\n#L2#兌換寵物隨機卷軸 (5 Pianus Scale)";
    cm.sendSimple(chat);
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
            var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 120+ \r\n\r\n";
            var chenhui = 0;
            var party = cm.getPlayer().getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if (party.get(i).getLevel() < 120 || party.get(i).getMapid() != 923040000 || party.size() < 2) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Kenta");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.dispose();
                return;
            }
            cm.sendOk("陷入危險的坎特任務正在執行中，請嘗試其他頻道。");
            break;
        case 1:
        case 2:
            item = [1022123, 2048010];
            qty = [50, 5];

            if (cm.getPlayer().itemQuantity(4001535) < qty[selection - 1]) {
                cm.sendOk("兌換#b#z" + item[selection - 1] + "##k需要#r" + qty[selection - 1] + "#k個 #v4001535##b#t4001535##k。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainItem(selection == 1 ? item[selection - 1] : 2048010 + java.lang.Math.floor(java.lang.Math.random() * 4) | 0, 1);
            cm.gainItem(4001535, -qty[selection - 1]);
            cm.sendOk("謝謝你對坎特的幫助，請拿好你的物品。");
    }
    cm.dispose();
}
