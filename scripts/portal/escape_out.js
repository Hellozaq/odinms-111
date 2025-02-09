/*
     名字：外星基地
     地图：逃生路線
     描述：610040600
 */

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4033191)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "缺少鑰匙，無法打開基地出口的門"));
        return false;
    }
    pi.cancelItem(2210065);
    pi.gainItem(4033191, -1);
    Packages.server.quest.MapleQuest.getInstance(28753).forceComplete(pi.getPlayer(), 0);
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(610040700), pi.getMap(610040700).getPortal(2)); //逃生路線
    return true;
}
