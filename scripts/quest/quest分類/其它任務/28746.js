/*
     名字：是什麼在震?
     地图：新葉城-市區中心
     描述：600000000
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
            qm.sendNext("首先，我們得弄明白是什麼引起了這場地震！聽我新葉城-市區中心的那些個蛋頭夥計說，這地震可不是什麼自然現象，我覺得你應該從這點著手開始調查。");
            break;
        case 1:
            qm.sendAcceptDecline("給，拿好這個叫…#b#v2430680# #t2430680##k玩意兒，製造出它的哥們兒說你“能用它來找到地震的震中”什麼的，就照他們說的去做吧。");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(28746).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(2430680, qm.getPlayer().itemQuantity(2430680) ? 0 : 1);
            qm.dispose();
    }
}
