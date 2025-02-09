/*
     名字：簡
     地图：隐藏的塔入口&amp;lt;准备地图&gt;
     描述：921160000
 */

function start() {
    var chat = "#e<組隊任務：逃獄>#n \r\n\r\n虽说想就这样立刻逃跑，但是……我无法拒绝他的嘱托。在这座城里，被关在空中监狱的人们正在寻找帮他们逃离监狱的人。\r\n\r\n Number of players: 2~6 \r\n Level range: 120+ \r\n Time limit: 20minutes#b";
    chat += "\r\n#L0#進入任務地圖";
    chat += "\r\n#L1#兌換#z1132094#";
    chat += "\r\n#L2#兌換#z1132095#";
    chat += "\r\n#L3#兌換#z1132096#";
    chat += "\r\n#L4#兌換#z1132097#";
    cm.sendSimple(chat);
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
        var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 120+ \r\n\r\n";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 120 || party.get(i).getMapid() != 921160000 || party.size() < 2) {
                chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Prison");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("逃獄任務正在執行中，請嘗試其它頻道。");
        cm.dispose();
    }
    if (mode > 0 && selection < 5) {
        if (cm.getPlayer().itemQuantity(4001534) < 20) {
            cm.sendOk("兑换#b#z" + (1132093 + selection) + "##k需要20個 #v4001534##b#t4001534##k。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainItem(1132093 + selection, 1);
        cm.gainItem(4001534, -20);
        cm.sendOk("謝謝你對逃离监狱的人的幫助，請拿好你的物品。");
    }
    cm.dispose();
}
