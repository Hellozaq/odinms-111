/*
     名字：埃德爾斯坦
     地图：發電廠大廳
     描述：931050700
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() < 1) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(931050701), pi.getMap(931050701).getPortal(1));
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
