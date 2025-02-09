/*
     名字：隱藏地圖
     地图：像刀刃的絕壁
     描述：914022100
 */

function enter(pi) {
    if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21303)).getStatus() != 1 || pi.getPlayer().itemQuantity(4032339)) {
        return false;
    }
    if (pi.getMap(914022200).getCharactersSize() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盜賊鸚鵡領域目前擁擠，請稍後再試"));
        return false;
    }
    pi.getMap(914022200).resetFully();
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(914022200), pi.getMap(914022200).getPortal(1)); //盜賊鸚鵡領域
    pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(914022100));
    return true;
}
