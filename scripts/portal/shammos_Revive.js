/*
     名字：冰雪峽谷
     地图：峽谷墓場
     描述：921120400
 */

function enter(pi) {
    if (pi.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開這裡之前，請在其它欄保留一個空位"));
        return false;
    }
    pi.gainNX(2500);
    pi.addTrait("will", 15);
    pi.addTrait("insight", 3);
    pi.gainItem(4001530, 1);
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(211000002), pi.getMap(211000002).getPortal(1)); //邪摩斯的單人房
    return true;
}
