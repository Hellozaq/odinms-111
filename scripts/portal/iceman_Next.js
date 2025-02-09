/*
     名字：冰雪平原
     地图：冰雪平原後路
     描述：932000100
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300438) == null) {
        map = pi.getPlayer().getMap().getId() + 100;

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "請確保冰人安全抵達這裏"));
    return false;
}
