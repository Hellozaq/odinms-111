/*
     名字：隱藏地圖
     地图：與瑪哈的對決
     描述：914020000
 */

function enter(pi) {

    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(140000000), pi.getMap(140000000).getPortal(1)); //瑞恩村
    return true;
}
