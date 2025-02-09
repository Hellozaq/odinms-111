/*
     名字：騎士團要塞
     地图：要塞入口
     描述：271030010
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31124)).getStatus() == 1) {
        pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31124)).setCustomData("end");
        pi.getPlayer().updateQuest(pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31124)), true);
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於騎士團要塞的警戒强化，通道已關閉"));
    return false;
}
