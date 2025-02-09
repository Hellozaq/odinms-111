/*
     名字：稱號-見習十字獵人
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
            qm.sendNext("雖然首先要進行見習，但還是祝賀你成為十字獵人的成員。授予你#b<見習十字獵人>#k的稱號。");
            break;
        case 1:
            qm.sendAcceptDecline("請收下這枚紀念的勳章，希望你在今後的任務中，能不斷的成長。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142351# #t1142351# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(1644).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142351, 1);
            qm.dispose();
    }
}
