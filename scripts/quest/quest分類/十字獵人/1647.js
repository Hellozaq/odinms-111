/*
     名字：稱號-十字獵人大師
     地图：埃德爾斯坦
     描述：310000000
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
            qm.sendNext("十分感謝你至今為止出色的完成了十字獵人的任務，包括我在內的十字獵人旅團成員都看到了你的活躍。你才是真正的#b<十字獵人大師>#k。");
            break;
        case 1:
            qm.sendAcceptDecline("授予你<十字獵人大師>的稱號，期待你以後更加活躍的表現。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142354# #t1142354# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(1647).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142354, 1);
            qm.dispose();
    }
}
