/*
     名字：木箱的秘密
     地图：維多利亞港
     描述：104000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendSimple("木箱裡有著來路不明的藥…。\r\n#L0##b你最好把這個帶給約翰，問他是什麼");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21767).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032423, qm.getPlayer().itemQuantity(4032423) ? 0 : 1);
            qm.dispose();
    }
}
