/*
     名字：影武者－覺醒之時
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2363)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2363).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("真是優秀，慧眼選擇了你。是否要立刻學習影武者的真正技能？如果你同意，我就將你覺醒為下忍。");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2363).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(430);
            qm.gainItem(4032616, -1);
            qm.gainItem(1342000, 1);
            qm.sendNext("現在開始你就是下忍了，要時刻保持自尊心而活。");
            break;
        case 2:
            qm.sendOk("可以讓你的力量更上一層樓的新裝備已經發放給你了。希望你能好好使用。");
            break;
        case 3:
            qm.dispose();
    }
}
