/*
     名字：地球防衛總部
     地图：司令室
     描述：221000300
 */

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4031890)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "使用某種卡片啟動的傳送裝置"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(120000101), pi.getMap(120000101).getPortal(3)); //航海室
    return true;
}
