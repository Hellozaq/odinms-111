/*
     名字：隱藏地圖
     地图：狼的考驗
     描述：914030000
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(140010210), pi.getMap(140010210).getPortal(0)); //狼之平原
        Packages.server.quest.MapleQuest.getInstance(21620).forceStart(pi.getPlayer(), 0, 0);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
