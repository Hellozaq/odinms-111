/*
     名字：獅子王城
     地图：空中監獄
     描述：211070101
 */

function enter(pi) {
    if (pi.getPlayer().itemQuantity(4032860)) {
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(211070100), pi.getMap(211070100).getPortal(1)); //見面室
        pi.getPlayer().removeAll(4032860);
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通道已關閉，需要找到空中監獄的鑰匙打開它"));
    return false;
}
