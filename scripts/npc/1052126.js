/*
     名字：前代達克魯的日記
     地图：前代達克魯的房間
     描述：910350100
 */

function start() {
    if (cm.getPlayer().itemQuantity(4032617)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainItem(4032617, 1);
        cm.sendOk("拿到了#v4032617#，把它帶回去交給雪姬小姐。");
        cm.dispose();
        return;
    }
    cm.sendOk("由於怪物的阻礙，無法取得日記");
    cm.dispose();
}
