/*
     名字：寵物訓練1
     地图：寵物公園
     描述：100000202
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(4646)).getStatus() != 1) {
        cm.sendOk("被草遮住的東西。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().itemQuantity(4031921)) {
        cm.sendOk("這是什麼……呃……裡面有寵物的糞便。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("我能看見一些草覆蓋的東西，我應該把它拿出來嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.sendOk("我找到了#b#p1012006##k藏的東西……這張便條。");
        cm.gainItem(4031921, 1);
    }
    cm.dispose();
}
