/*
     名字：寵物訓練2
     地图：寵物公園
     描述：100000202
 */

function start() {
    cm.sendYesNo("我能看見一些草覆蓋的東西，我應該把它拿出來嗎？");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("我沒想太多，所以沒碰它。");
            break;
        case 1:
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.sendOk("討厭......是寵物便便！");
            cm.gainItem(4031922, cm.getPlayer().itemQuantity(4031922) ? 0 : 1);
    }
    cm.dispose();
}
