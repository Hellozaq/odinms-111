/*
     名字：潘
     地图：冰雪平原入口
     描述：932000000
 */

function start() {
    var chat = "#e<組隊任務：冰騎士的詛咒>#n \n\r\n\r\約翰說想變得勇敢，想成為所有人認可的勇敢的人，但是他卻被冰人騙了，變成了那副模樣，請幫幫我的朋友約翰！要是不快點把詛咒解開的話，約翰可能會和冰人一樣，永遠失去人類的心！\r\n\r\n Number of players: 2~6 \r\n Level range: 30~70 \r\n Time limit: 20minutes#b";
    chat += "\r\n#L0#進入任務地圖";
    chat += "\r\n#L1#兌換#z1072510# (10 Cold Ice)";
    chat += "\r\n#L2#兌換#z1032100# (20 Cold Ice)";
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
            var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 30~70 \r\n\r\n";
            var chenhui = 0;
            var party = cm.getPlayer().getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if (party.get(i).getLevel() < 30 || party.get(i).getLevel() > 70 || party.get(i).getMapid() != 932000000 || party.size() < 2) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Iceman");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.dispose();
                return;
            }
            cm.sendOk("冰騎士的詛咒任務正在執行中，請嘗試其它頻道。");
            break;
        case 1:
        case 2:
            item = [1072510, 1032100];
            qty = [10, 20];

            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            if (cm.getPlayer().itemQuantity(4001529) < qty[selection - 1]) {
                cm.sendOk("兌換#b#z" + item[selection - 1] + "##k需要#r" + qty[selection - 1] + "#k個 #v4001529##b#t4001529##k。");
                cm.dispose();
                return;
            }
            cm.gainItem(item[selection - 1], 1);
            cm.gainItem(4001529, -qty[selection - 1]);
            cm.sendOk("謝謝你對約翰的幫助，請拿好你的物品。");
    }
    cm.dispose();
}
