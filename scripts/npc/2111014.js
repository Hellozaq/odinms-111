/*
     名字：書桌
     地图：失蹤煉金術士的家
     描述：261000001
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).getStatus() == 1) {
        var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).getCustomData();
        prog = (progress == 4 ? 5 : 3);
        if (progress != 5)
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)).setCustomData(prog);
        cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3311)), true);
        cm.sendOk("特力術士的的筆記，很多公式和浮誇的科學文獻可以在書頁中找到，但值得注意的是，在最後一篇文章（3周前）中，有人寫道，他完成了對新赫羅裏德藍圖改進的研究，從而為向“社會”展示它做了最後的準備…後面沒有內容了…");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3322)).getStatus() != 1 || cm.getPlayer().itemQuantity(4031697)) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.gainItem(4031697, 1);
    cm.sendOk("找到了#b#z4031697##k。");
    cm.dispose();
}
