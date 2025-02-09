/*
     名字：潔淨的樹根
     地图：大木林之巔
     描述：101020300
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20716)).getStatus() == 1 && !cm.getPlayer().itemQuantity(4032142) || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24078)).getStatus() == 1 && !cm.getPlayer().itemQuantity(4032967)) {
        if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
            cm.dispose();
            return;
        }
        cm.sendOk(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20716)).getStatus() == 1 ? "你把一些乾淨的樹液灌了起來#b#t4032142##k #v4032142#" : "在木紋中間採集到了#t4032967#");
        cm.gainItem(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20716)).getStatus() == 1 ? 4032142 : 4032967, 1);
        cm.dispose();
        return;
    }
    cm.sendOk("從這小小的樹樁裏源源不斷地流出樹液。");
    cm.dispose();
}
