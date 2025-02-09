/*
     名字：隱藏地圖
     地图：瑞德弟的陷阱
     描述：922030100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24084)).getCustomData() == 1) {
        Packages.server.quest.MapleQuest.getInstance(24084).forceComplete(pi.getPlayer(), 0);
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(220040100), pi.getMap(220040100).getPortal(6)); //時間之路&amp;lt;2&gt;
    return true;
}
