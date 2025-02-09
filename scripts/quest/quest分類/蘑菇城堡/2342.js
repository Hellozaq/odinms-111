/*
     名字：找回的玉璽
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("勇士大人，好像你忘了從總理大臣手裡獲得#b#z4001318##k，這對我們的菇菇王國很重要。");
            break;
        case 1:
            qm.sendPrev("請拿好這個#v4001318#，儘快交給我的父親。");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2342).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4001318, qm.getPlayer().itemQuantity(4001318) ? 0 : 1);
            qm.dispose();
    }
}
