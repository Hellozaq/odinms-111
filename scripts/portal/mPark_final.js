/*
     名字：石巨人寺院
     地图：第6階段 : 隱藏的石室
     描述：952000500
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
        return false;
    }
    if (pi.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開這裡之前，請在其它欄保留一個空位"));
        return false;
    }
    pi.gainItem(4310020, 1);
    pi.playPortalSE();
    pi.getPlayer().changeMap(pi.getMap(951000000), pi.getMap(951000000).getPortal(0)); //怪物公園
    return true;
}
