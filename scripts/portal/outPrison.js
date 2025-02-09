/*
     名字：次元的縫隙
     地图：邪惡內面的空地
     描述：272030410
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() != 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(272030400), pi.getMap(272030400).getPortal(1)); //阿卡伊農的祭壇
    return true;
}
