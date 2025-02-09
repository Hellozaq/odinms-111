/*
     名字：被破壞的歷恩森林
     地图：被破壞的六條岔道
     描述：271010500
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31144)).getStatus() == 1) {
        pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31144)).setCustomData("find");
        pi.getPlayer().updateQuest(pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31144)), true);
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於西格諾斯的攻擊破壞了六條岔道，通道已關閉"));
    return false;
}
