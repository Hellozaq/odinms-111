/*
     名字：菇菇王國
     地图：最後城塔
     描述：106021402
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2333)).getStatus() > 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(106021700), pi.getMap(106021700).getPortal(1));
        return false;
    }
    if (pi.getPlayer().itemQuantity(4032388)) {
        pi.openNpc(1300013);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "門似乎被鎖上了，需要一把鑰匙打開它"));
    return false;
}
