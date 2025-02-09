/*
     名字：亞凱斯特的水晶
     地图：冰原雪域市集
     描述：211000100
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("又不是什麼困難的事，你這人一點人情味都沒有…嘖嘖…");
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
            qm.sendAcceptDecline("莫特的信件我已經交給他的家人了。有件事，希望你答應我的請求…");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3182).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(2430159, qm.getPlayer().itemQuantity(2430159) ? 0 : 1);
            qm.dispose();
    }
}

function end(mode, type, selection) {
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
            qm.sendYesNo("是你…我的信件已經交給亞凱斯特了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(3182).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(12000);
            qm.dispose();
    }
}
