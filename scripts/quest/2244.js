/*
     名字：崔斯坦的繼承人
     地图：崔斯坦的墳墓
     描述：105100101
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2244)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2244).forceStart(qm.getPlayer(), qm.getNpc(), 0);
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2244)).getCustomData() < 200) {
                qm.sendOk("勇敢的冒險家，目前你阻止" + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2244)).getCustomData() + "次巴洛古的復活。如成功阻止200次巴洛古的復活，你會成為楓葉世界的勇士。到那時我會認定你成為我的繼承人。提起勇氣來，年輕的冒險家…");
                qm.dispose();
                return;
            }
            qm.sendNext("勇敢的冒險家…你是楓葉世界的勇士，你成功的阻止了200次巴洛古的復活，請收下這份值得紀念的繼承物。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142079# #t1142079# 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 6800 exp");
            break;
        case 1:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2244).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142079, 1);
            qm.gainExp(6800);
            qm.dispose();
    }
}
