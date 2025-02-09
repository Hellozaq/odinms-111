/*
     名字：生命之穴
     地图：迷宮室
     描述：240050100
 */

function enter(pi) {
    if (pi.getMap(240050100).getCharacters().size() == 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "迷宮室需要保留一名玩家，守候傳入的鑰匙"));
        return false;
    }
    if (pi.getPlayer().itemQuantity(4001087)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於攜帶第一個迷宮室的水晶鑰匙，無法前往下一個區域"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(240050101), pi.getMap(240050101).getPortal(0)); //第一個迷宮室
    return true;
}
