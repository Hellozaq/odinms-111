/*
     名字：稱號-專業十字獵人
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
            qm.sendNext("真是太令人吃驚了，你能這麼出色的完成任務……特授予你#b<專業十字獵人>#k稱號。");
            break;
        case 1:
            qm.sendAcceptDecline("祝賀你成為<專業十字獵人>，希望你能為了下一個任務而變得更加强大。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142353# #t1142353# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(1646).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142353, 1);
            qm.dispose();
    }
}
