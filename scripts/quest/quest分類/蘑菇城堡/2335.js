/*
     名字：清除餘黨
     地图：結婚禮堂
     描述：106021600
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("還沒有完全結束。勇士，菇菇城堡中還有很多總理大臣的手下，希望你能去清除他們。");
            break;
        case 1:
            qm.sendYesNo("據我瞭解…#b瑪天路3#k附近就有總理大臣手下聚集的地方。這 裡有總理大臣丟下的鑰匙，請拿去用這個鑰匙吧。");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.sendNext("這是最後一個請求。");
            Packages.server.quest.MapleQuest.getInstance(2335).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032405, qm.getPlayer().itemQuantity(4032405) ? 0 : 1);
            qm.dispose();
    }
}
