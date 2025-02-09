/*
     名字：毒霧森林
     地图：劇毒森林
     描述：930000600
 */

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300183) != null) {
        if (pi.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
            pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "離開這裡之前，請在其它欄保留一個空位"));
            return false;
        }
        pi.gainItem(4001198, 1);
        pi.playPortalSE();
        pi.getPlayer().changeMap(pi.getMap(930000800), pi.getMap(930000800).getPortal(0)); //森林外圍出口
        return true;
    }
    pi.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "由於怪物的阻擋，通道已關閉"));
    return false;
}
