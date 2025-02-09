/*
     名字：騎士團要塞
     地图：要塞入口
     描述：271030000
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032922)) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(271030100), pi.getMap(271030100).getPortal(4)); //騎士團第1區域
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "騎士團要塞禁止外來者訪問"));
    return false;
}
