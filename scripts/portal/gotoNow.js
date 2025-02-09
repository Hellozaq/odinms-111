/*
     名字：黑暗時間神殿
     地图：黑魔法師的房前迴廊
     描述：272010200
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31178)).getStatus() < 2) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.getTopMsg("先聽聽女神說什麼吧"));
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "先聽聽女神說什麼吧"));
            return false;
        }
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(272000000), pi.getMap(272000000).getPortal(2)); //時間裂縫
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
