/*
     名字：納希沙漠
     地图：納希宮殿
     描述：260000300
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4031582)) {

        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(260000301), pi.getMap(260000301).getPortal(5));
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "宮殿禁止外來者訪問"));
    return false;
}
