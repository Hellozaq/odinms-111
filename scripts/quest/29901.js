/*
     名字：初階冒險家
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
            qm.sendAcceptDecline("恭喜你取得了驚人的進步，你有一直在為楓之谷世界的發展做出貢獻，為了感謝你對楓之谷世界的支持，請收下這枚紀念的勳章。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142108# #t1142108# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29901).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142108, 1);
            qm.dispose();
    }
}
