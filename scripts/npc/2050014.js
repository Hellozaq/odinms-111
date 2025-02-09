/*
     名字：隕石1
     地图：克嵐草原Ⅰ
     描述：221040000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3421)).getStatus() == 1) {
        var meteoriteId = cm.getNpc() - 2050014;

        var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3421)).getCustomData();
        if ((progress >> meteoriteId) % 2 == 0 || (progress == 63 && cm.getPlayer().itemQuantity(4031117) < 6)) {
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            progress |= (1 << meteoriteId);

            cm.gainItem(4031117, 1);
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3421)).setCustomData(progress);
            cm.sendOk("找到一塊隕石的碎片#v4031117#。");
        }
    }
    cm.dispose();
}
