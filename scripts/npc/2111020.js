/*
     名字：第一個魔法陣
     地图：黑魔法師的研究室
     描述：261040000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3345)).setCustomData(1);
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "已啟動第一個魔法陣"));
    cm.showNpcSpecialEffect(2111020, "act33451");
    cm.dispose();
}
