/*
     名字：卡普利爾的背包
     地图：戒備深嚴的住宅
     描述：931010010
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("請消滅所有警衛後在來找衣服。");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
        cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
        cm.dispose();
        return;
    }
    cm.sendNext("拿出了卡普利爾的衣服。快把它交給#b阿貝勒特#k吧。");
    cm.gainItem(4032757, cm.getPlayer().itemQuantity(4032757) ? 0 : 1);
    cm.dispose();
}
