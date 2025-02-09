/*
     名字：知識的殿堂
     地图：櫻花處
     描述：101050000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24058)).getStatus() == 1 && !cm.getPlayer().itemQuantity(4032963)) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.sendNext("(從圖書館中把怪物圖鑑拿了出來。要想交給勇士之村的溫斯頓，通過神秘傳送點過去應該會比較方便吧？神秘傳送點在村子右邊。)");
        cm.gainItem(4032963, 1);
    }
    cm.dispose();
}
