/*
     名字：第二個魔法陣
     地图：黑魔法師的研究室
     描述：261040000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).getCustomData() != 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "啟動錯誤，魔法陣已重新歸位"));
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).setCustomData(0);
        cm.dispose();
        return;
    }
    cm.showNpcSpecialEffect(2111021, "act33452");
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "已啟動第二個魔法陣"));
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).setCustomData(2);
    cm.dispose();
}
