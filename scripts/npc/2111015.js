/*
     名字：勒塞倫的書桌
     地图：研究所B-1區
     描述：261020200
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3314)).getStatus() != 1 || cm.getPlayer().itemQuantity(2022198)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendOk("拿起了桌上的#b#z2022198##k。");
    cm.gainItem(2022198, 1);
    cm.dispose();
}
