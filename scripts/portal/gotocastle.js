/*
     名字：菇菇王國
     地图：岔路
     描述：106020400
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)).getCustomData() > 0 || pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106020501), pi.getMap(106020501).getPortal(1)); //城壁邊邊
        return true;
    }
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getCustomData() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106020500), pi.getMap(106020500).getPortal(1)); //城壁邊邊
        return true;
    }
    if (pi.getPlayer().itemQuantity(4000507)) {
        pi.gainItem(4000507, -1);
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106020500), pi.getMap(106020500).getPortal(1)); //城壁邊邊
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於魔法屏障的阻擋，通道已關閉"));
    return false;
}
