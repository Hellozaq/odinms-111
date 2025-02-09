/*
     名字：隱藏地圖
     地图：隱藏之塔
     描述：921160100
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getId() == 921160100 || pi.getPlayer().getMap().getId() == 921160500) {
        pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "有一位組員進入了下一個區域，還有" + (pi.getPlayer().getMap().getCharacters().size() - 1) + "名組員被困在塔牢之中"));
    }
    if ((pi.getPlayer().getMap().getId() == 921160200 || pi.getPlayer().getMap().getId() == 921160400) && pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getMap().getId() == 921160350) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "此通道已被破壞"));
        return false;
    }
    if (pi.getPlayer().getMap().getId() == 921160600 && pi.getPlayer().getEventInstance().getProperty("kentaSaving") != 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的突襲，通道已被封鎖"));
        return false;
    }
    map = pi.getPlayer().getMap().getId() + 100;
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal("out00"));
    return false;
}
