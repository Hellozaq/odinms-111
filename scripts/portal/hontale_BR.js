/*
     名字：生命之穴
     地图：試煉之穴Ⅰ
     描述：240060000
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        map = pi.getPlayer().getMap().getId() + 100; //試煉之穴Ⅱ
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
