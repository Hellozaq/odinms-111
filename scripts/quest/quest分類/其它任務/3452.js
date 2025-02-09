/*
     名字：機器章魚是外星生物？
     地图：司令室
     描述：221000300
 */

var status = -1;

function end(mode, type, selection) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3452)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3452).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("謝謝你帶過來的#z4000099#，對我接下去的研究很有幫助。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2000011# #t2000011# 50 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 8000 exp");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3452).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4000099, -1);
            qm.gainItem(2000011, 50);
            qm.gainExp(8000);
            qm.dispose();
    }
}
