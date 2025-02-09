/*
     名字：空牆
     地图：廢棄的工地
     描述：103010100
 */

function start() {
    cm.showNpcSpecialEffect(1043002, "q2358");

    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2358)).getStatus() != 1) {
        cm.dispose();
        return;
    }
    var progress = cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2358)).getCustomData();
    prog = cm.getPlayer().getMap().getId() == 103020000 ? (progress == 3 ? 5 : 4) : (progress == 4 ? 5 : 3);
    if (progress != 5)
        cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2358)).setCustomData(prog);
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "已經粘貼好海報"));
    cm.showNpcSpecialEffect(1043002, "q2358");
    cm.dispose();
}
