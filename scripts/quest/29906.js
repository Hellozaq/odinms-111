/*
     名字：修煉騎士
     地图：耶雷弗
     描述：130000000
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
            qm.sendAcceptDecline("現在的你已經是一名修煉騎士，作為楓之谷世界的騎士，請收下這枚代表自己身份的勳章。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142066# #t1142066# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29906).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142066, 1);
            qm.dispose();
    }
}
