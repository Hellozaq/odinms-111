/*
     名字：和莫斯提馬的契約
     地图：秘密廣場
     描述：310010000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(23212)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(23212).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendYesNo("好！現在開始進行簽約儀式。請將精神盡量往我這邊集中。");
            break;
        case 1:
            qm.sendNextPrevS("#b(好像有一股不尋常的氣息流入體內。)");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23212).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142342, 1);
            qm.getPlayer().changeJob(3110);
            qm.sendOk("契約完成了，請多多指教！以後你可以不用發出聲音說話，試著利用內心說話吧。");
            qm.dispose();
    }
}
