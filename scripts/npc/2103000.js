/*
     名字：宮廷綠洲
     地图：納希宮殿
     描述：260000300
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3900)).getStatus() == 1) {
        cm.sendOk("多麼清澈的水，喝一口就應該可以融入這裡，我現在應該是個合格的納希人拉。");
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3900)).setCustomData(5);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3900)), true);
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3938)).getStatus() > 1 || (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3934)).getStatus() > 0 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3935)).getStatus() < 2)) {
        if (cm.getPlayer().itemQuantity(2210005) || cm.getPlayer().getBuffSource(Packages.client.MapleBuffStat.MORPH) == 2210005) {
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.gainItem(2210005, 1);
        cm.sendOk(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3938)).getStatus() > 1 ? "你發現了一縷漂浮在水面上頭髮，可能是提肯的，你抓了起來，想到#b傑諾#k上次怎麼製作的，你製作了新的#z2210005#。" : "你在水面上找到了一個奇怪的瓶子，它看著像某個守衛的模樣，也許它可以讓你自由進出這裡。");
    }
    cm.dispose();
}
