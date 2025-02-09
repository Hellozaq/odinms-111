/*
     名字：魔法藥水圖鑒
     地图：魔法森林圖書館
     描述：101000003
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2757)).getStatus() == 1 && !cm.getPlayer().itemQuantity(4033005)) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.sendOk("#b你找到#v4033005#。");
        cm.gainItem(4033005, 1);
    }
    cm.dispose();
}
