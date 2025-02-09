/*
     名字：點火裝置
     地图：可可島某處
     描述：3000500
 */

function start() {
    if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2566)).getStatus() != 1 || cm.getPlayer().itemQuantity(4032985)) {
        cm.dispose();
        return;
    }
    cm.gainItem(4032985, 1);
    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "拿到了點火裝置"));
    cm.dispose();
}
