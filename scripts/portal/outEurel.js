/*
     名字：精靈之林
     地图：櫻花處
     描述：101050000
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24040)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24093)).getStatus() != 1) {
        pi.openNpc(1033205);
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24040)).getStatus() < 1 && pi.getPlayer().getJob() == 2300) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "還沒有瞭解村子的情況，等下再出去吧"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(101050100), pi.getMap(101050100).getPortal(2)); //發光的洞穴之路
    return true;
}
