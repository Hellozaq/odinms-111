/*
     名字：莫特的信件
     地图：第二座塔
     描述：211060400
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("喔喔…難道是聽不到我的聲音嗎…");
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
            qm.sendAcceptDecline("拜託…如果有人聽到我的聲音…只要一下…一下下就好請聽聽我的述說！！");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(3181).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.gainItem(4032859, qm.getPlayer().itemQuantity(4032859) ? 0 : 1);
            qm.dispose();
    }
}

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
            qm.sendNext("嗯…給我的信？是誰寄的呢？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(3181).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4032859, -1);
            qm.gainExp(5000);
            qm.dispose();
    }
}
