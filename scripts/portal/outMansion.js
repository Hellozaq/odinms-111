/*
     名字：埃德爾斯坦
     地图：戒備深嚴的住宅
     描述：931010010
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(310000000), pi.getMap(310000000).getPortal(15)); //埃德爾斯坦
    return true;
}
