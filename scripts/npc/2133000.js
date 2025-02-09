/*
     名字：艾靈
     地图：深沉精靈之林
     描述：300030100
 */

function start() {
    cm.sendSimple("#e<組隊任務：毒霧森林>#n\r\n\r\n曾經這片森林充滿歡樂，自從有個怪物來到之後，就打破了森林的寧靜，我一直在等待能幫助我們的英雄到來，使森林恢復到以前的狀態。\r\n\r\n Number of players: 2~6 \r\n Level range: 70~119 \r\n Time limit: 20minutes\r\n#L0##b進入任務地圖#l\r\n#L1#兌換#z1032060##l\r\n#L2#進階#z1032061##l\r\n#L3#進階#z1032101##l");
}

function action(mode, type, selection) {
    if (mode > 0 && selection < 1) {
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
        var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\n Number of players: 2~6 \r\n Level range: 70~119\r\n\r\n";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 70 || party.get(i).getLevel() > 119 || party.get(i).getMapid() != 300030100 || party.size() < 2) {
                chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Ellin");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("毒霧森林任務正在執行中，請嘗試其它頻道。");
    }
    if (mode > 0 && selection < 4) {
        item = [1032060, 1032061, 1032101];
        qty = [10, 20, 40];

        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().itemQuantity(4001198) < qty[selection - 1]) {
            cm.sendOk("兌換#b#z" + item[selection - 1] + "##k需要#r" + qty[selection - 1] + "#k個#v4001198##b#t4001198##k。");
            cm.dispose();
            return;
        }
        cm.gainItem(item[selection - 1], 1);
        cm.gainItem(4001198, -qty[selection - 1]);
        cm.sendOk("謝謝你對艾靈森林的幫助，請拿好你的物品。");
    }
    cm.dispose();
}
