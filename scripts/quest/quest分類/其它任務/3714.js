/*
     名字：闇黑龍王遺留下來的東西…
     地图：九靈龍巢穴
     描述：240040612
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
            qm.sendNext("很感謝你找到了#b#t4001094##k，請收下這份禮物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v2041200# #t2041200# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 42000 exp");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            if (qm.getPlayer().itemQuantity(2041200)) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "只能擁有一個的道具"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3714).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4001094, -1);
            qm.gainItem(2041200, 1);
            qm.gainExp(42000);
            qm.dispose();
    }
}
