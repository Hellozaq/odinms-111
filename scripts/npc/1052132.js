/*
     名字：名藥店的抽屜4
     地图：墮落城市藥店
     描述：103000002
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2852)).getStatus() != 1 || cm.getPlayer().itemQuantity(4033036)) {
        cm.sendOk("沒有允許，不能隨便打開看。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendNext("悄悄的拿走抽屜裏的#v4033036#。");
    cm.gainItem(4033036, 1);
    cm.dispose();
}
