/*
     名字：菇菇王國
     地图：菇菇森林深處
     描述：106020300
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getCustomData() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106020400), pi.getMap(106020400).getPortal(2)); //岔路
        return true;
    }
    if (pi.getPlayer().itemQuantity(4000507)) {
        pi.gainItem(4000507, -1);
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106020400), pi.getMap(106020400).getPortal(2)); //岔路
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由于魔法屏障的阻碍，无法穿越。"));
    return false;
}
