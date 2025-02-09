/*
     名字：天上的克里塞
     地图：激戰薛西斯
     描述：200101500
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31013)).getStatus() == 1) {
        Packages.server.quest.MapleQuest.getInstance(31018).forceStart(pi.getPlayer(), 0, 1);
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(200101400), pi.getMap(200101400).getPortal(1)); //進入競技場內部
    return true;
}
