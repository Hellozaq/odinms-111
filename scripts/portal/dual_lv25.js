/*
     名字：維多利亞
     地图：秘密花園地下
     描述：103050300
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 25) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "修煉場2適用於25等以上的影武者"));
        return false;
    }

    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(103050340), pi.getMap(103050340).getPortal(1)); //修煉場2
    return true;
}
