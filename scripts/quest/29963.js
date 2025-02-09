/*
     名字：協助完成夢想的恩人
     地图：墮落廣場站
     描述：103020020
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
            qm.sendNext("謝謝你幫我達成了心願，在此祝福你以後都能開心。");
            break;
        case 1:
            qm.sendPrev("有空可以常常來這裡玩。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2049201# #t2049201# 1 \r\n#v2049203# #t2049203# 1 \r\n#v2049205# #t2049205# 1 \r\n#v2049207# #t2049207# 1 \r\n#v2049209# #t2049209# 1 \r\n#v2049211# #t2049211# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 6) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29963).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(2049201, 1);
            qm.gainItem(2049203, 1);
            qm.gainItem(2049205, 1);
            qm.gainItem(2049207, 1);
            qm.gainItem(2049209, 1);
            qm.gainItem(2049211, 1);
            qm.dispose();
    }
}
