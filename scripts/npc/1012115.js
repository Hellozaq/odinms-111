/*
     名字：弓箭手村草叢
     地图：弓箭手村北邊山丘
     描述：100010000
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20706)).getStatus() != 1 || cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20731)).getStatus() != 0) {
        cm.dispose();
        return;
    }
    cm.showNpcSpecialEffect(1012115, "blackShadow");
    Packages.server.quest.MapleQuest.getInstance(20731).forceStart(cm.getPlayer(), 0, 1);
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "草叢中有黑影一閃而過，你還沒看清楚是什麼，最好報告給羅卡"));
    cm.dispose();
}
