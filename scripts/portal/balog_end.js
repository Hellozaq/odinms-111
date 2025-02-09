/*
     名字：巴洛古的寺院
     地图：巴羅古消失的地點
     描述：105100401
 */

function enter(pi) {
    if (pi.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開這裡之前，請在其它欄保留一個空位"));
        return false;
    }
    pi.gainItem(4001261, 1);
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(105100100), pi.getMap(105100100).getPortal(0)); //神殿底層

    return true;
}
