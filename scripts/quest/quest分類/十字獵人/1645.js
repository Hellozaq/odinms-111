/*
     名字：稱號-正式十字獵人
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
            qm.sendNext("羅拉已經跟我說過了，聽說你出色地完成了任務，現在你好像已經足夠強大，可以授予#b<正式十字獵人>#k稱號了。");
            break;
        case 1:
            qm.sendAcceptDecline("從現在起，祝賀你成为正式的十字獵人，請收下這枚紀念的勳章。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142352# #t1142352# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(1645).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142352, 1);
            qm.dispose();
    }
}
