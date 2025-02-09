/*
     名字：維多利亞
     地图：秘密花園地下
     描述：103050300
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 20) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "修煉場1適用於20等以上的影武者"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103050310), pi.getMap(103050310).getPortal(1)); //修煉場1
    return true;
}
