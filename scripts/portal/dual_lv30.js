/*
     名字：維多利亞
     地图：秘密花園地下
     描述：103050300
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 30) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "修煉場3適用於30等以上的影武者"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103050370), pi.getMap(103050370).getPortal(1)); //修煉場3
    return true;
}
