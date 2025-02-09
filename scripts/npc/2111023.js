/*
     名字：魔法陣中央
     地图：黑魔法師的研究室
     描述：261040000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).getCustomData() != 3) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "啟動錯誤，魔法陣已重新歸位"));
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).setCustomData(0);
        cm.dispose();
        return;
    }
    if (!cm.getPlayer().itemQuantity(4031739) || !cm.getPlayer().itemQuantity(4031740) || !cm.getPlayer().itemQuantity(4031741)) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "缺少淨化中央魔法陣的物品謙虛的魔法石、正直的魔法石、信賴的魔法石"));
        cm.dispose();
        return;
    }
    cm.gainItem(4031739, -1);
    cm.gainItem(4031740, -1);
    cm.gainItem(4031741, -1);
    cm.showNpcSpecialEffect(2111023, "act33454");
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).setCustomData(4);
    cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)), true);
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "當你放置碎片時，一束光照在圓圈上，擊退了神器內部醞釀的任何徵兆"));
    cm.dispose();
}
