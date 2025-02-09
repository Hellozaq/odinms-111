/*
     名字：卡帕萊特的書櫥
     地图：熄火的研究室
     描述：926120000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3309)).getStatus() != 1 || cm.getPlayer().itemQuantity(4031708)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendOk("你找到了#b#z4031708##k。");
    cm.gainItem(4031708, 1);
    cm.dispose();
}
