/*
     名字：龍魔導士第2次轉職
     地图：龍魔導士第2次轉職
     描述：龍魔導士第2次轉職
 */

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(22101).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getShowQuestCompletion(22101));
    qm.getPlayer().changeJob(2210);
    qm.dispose();
}
