/*
     名字：復活的家人
     地图：秘密廣場
     描述：310010000
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
            qm.sendAcceptDecline("你已經是末日反抗軍了，為了感謝你對楓之谷世界的支持，請收下這枚紀念的勳章。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142341# #t1142341# 1");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29958).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142341, 1);
            qm.dispose();
    }
}
