/*
     名字：王妃的裝飾櫃
     地图：納希宮殿&amp;lt;國王房間&gt;
     描述：260000303
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3923)).getStatus() != 1 || cm.getPlayer().itemQuantity(4031578)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendOk("你在高貴的裝飾櫃裏拿到了#b#z4031578##k。");
    cm.gainItem(4031578, 1);
    cm.dispose();
}
