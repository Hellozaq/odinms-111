/*
     名字：鯨魚號
     地图：航海室
     描述：120000101
 */

function enter(pi) {
    if (!pi.getPlayer().itemQuantity(4031890)) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "使用某種卡片啟動的傳送裝置"));
        return false;
    }
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(221000300), pi.getMap(221000300).getPortal(2)); //司令室
    return true;
}
