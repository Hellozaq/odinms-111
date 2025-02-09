/*
     名字：地鐵垃圾桶
     地图：沿著軌道
     描述：103020100
 */

function start() {
    if (cm.getPlayer().getPosition().x < 1200 || cm.getPlayer().getPosition().x > 1400) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("距離太遠了……需要靠近一些"));
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)).getStatus() != 1) {
        if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20710)).getStatus() != 1 || cm.getPlayer().itemQuantity(4032136)) {
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.sendNext("你在垃圾桶裏找到了#b#z4032136##k。");
        cm.gainItem(4032136, 1);
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)).getCustomData() == null) {
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)).setCustomData("0000");
    }
    var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)).getCustomData();
    var slot = cm.getNpc() - 1052109;
    var ch = progress[slot];
    if (ch == '0') {
        var nextProgress = progress.substr(0, slot) + '1' + progress.substr(slot + 1);
        cm.sendOk("什麼也沒有找到。");
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)).setCustomData(nextProgress);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2857)), true);
    }
    cm.dispose();
}
