/*
     名字：結界的圖騰
     地图：冰原雪域市集
     描述：211000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("只要等一下就可以，你太沒耐性了吧 。");
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
            qm.sendAcceptDecline("材料已經全部收集了。請你稍等 。");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3192).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(2430180, qm.getPlayer().itemQuantity(2430180) ? 0 : 1);
            qm.dispose();
    }
}
