/*
     名字：歐尼斯龍蛋
     地图：燃燒的神木村5
     描述：272000500
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31173)).getStatus() != 1 || cm.getPlayer().itemQuantity(4033081)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendNextS("蛋好像沒事。請好好照看，不要讓蛋受傷。", 5, 2144006);
    Packages.server.quest.MapleQuest.getInstance(31184).forceStart(cm.getPlayer(), cm.getNpc(), 1); //隱藏NPC效果
    cm.gainItem(4033081, 1);
    cm.dispose();
}
