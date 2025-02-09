/*
     名字：影武者－達克魯的日記本
     地图：雪姬的房間
     描述：103050101
 */

var status = -1;

function end(mode, type, selection) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2369)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2369).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("這是父親的日記，沒想到你居然把它拿回來拉，這讓我想起了以前的事情，我遇見我父親的那一天……我當時被怪物們團團圍住，是他救了我，還把我收為女兒。");
            break;
        case 1:
            qm.sendYesNo("我是越來越喜歡你了，以你現在的能力，應該有資格晉升到中忍的職位上，你是否願意接受？");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2369).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(431);
            qm.gainItem(4032617, -1);
            qm.gainItem(1052244, 1);
            qm.sendOk("從現在起你就是中忍，希望你能在新的職位上繼續努力修行，將影武者的事業發揚光大。");
            qm.dispose();
    }
}
