/*
     名字：生命之泉
     地图：闇黑龍王洞穴入口
     描述：240050400
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4031454)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendOk("你把#b泉水#k倒了一些进杯子裡。");
    cm.gainItem(4031454, -1);
    cm.gainItem(4031455, 1);
    cm.dispose();
}
