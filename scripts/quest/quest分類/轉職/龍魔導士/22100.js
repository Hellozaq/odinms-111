/*
     名字：龍魔導士第1次轉職
     地图：龍魔導士第1次轉職
     描述：龍魔導士第1次轉職
 */

function start(mode, type, selection) {
    qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getShowQuestCompletion(22100));
    qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.getEvanTutorial("UI/tutorial/evan/14/0"));
    Packages.server.quest.MapleQuest.getInstance(22100).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.getPlayer().changeJob(2200);
    qm.resetStats(4, 4, 20, 4);
    qm.dispose();
}
