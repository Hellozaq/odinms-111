/*
     名字：不承認的王
     地图：第五座塔樓
     描述：211061001
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("啊…很抱歉。你不方便幫助我嗎？是從太過分的要求了吧。");
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendAcceptDecline("我在玫瑰庭院找到了我和凡雷恩的共同記憶花秘笈#v4032837#。我們倆的手都不灵巧做得不漂亮，但是當時很快樂…喏，快把這個交給凡雷恩吧。");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3175).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032837, qm.getPlayer().itemQuantity(4032837) ? 0 : 1);
            qm.dispose();
    }
}
