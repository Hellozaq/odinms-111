/*
     名字：乾枯的路
     地图：隱藏著的入口
     描述：310040110
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032766)) {
        pi.openNpc(2153004);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "僅限黑色翅膀高級幹部使用的傳送裝置"));
    return false;
}
