/*
     名字：奇翁
     地图：海盜的寶物倉庫
     描述：925110000
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於海盜的阻擋，無法解救奇翁。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.gainItem(4032497, cm.getPlayer().itemQuantity(4032497) ? 0 : 1);
    cm.getPlayer().changeMap(cm.getMap(251000000), cm.getMap(251000000).getPortal(0));
    cm.dispose();
}
