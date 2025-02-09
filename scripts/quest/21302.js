/*
     名字：製作紅珠玉
     地图：瑞恩村
     描述：140000000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21302)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21302).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("啊！這、這個……想起製作紅珠玉的方法了嗎？啊啊……就算你腦袋尚未解凍又兼健忘症病人，我也無法棄你於不顧…啊！現在不是說這些的時候！快點將寶石交出來！");
            break;
        case 1:
            qm.sendAcceptDecline("很好，紅珠玉的力量也恢復了，再將你的力量喚醒一些。你的等級已經比之前提高了很多，應該能喚醒更多能力！");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            qm.sendOk("快點將之前的能力找回來。像以前一樣一起去冒險……");
            Packages.server.quest.MapleQuest.getInstance(21302).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142131, 1);
            qm.removeAll(4032312);
            qm.getPlayer().changeJob(2111);
            qm.dispose();
    }
}
