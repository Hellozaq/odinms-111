/*
     名字：阿裡可的秘信
     地图：長老公館
     描述：211000001
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2374)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(2374).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("我一直都在等待你回來，事情辦得怎麼樣了？這是#v4032619#阿裡可的信嗎？讓我來看看。");
            break;
        case 1:
            qm.sendNextPrev("我們終於得到了阿裡可的認可，這對我們來說是一個重要的時刻，這也是你經歷改變的時候了。");
            break;
        case 2:
            qm.sendYesNo("你有一直很努力的在為影武者們的將來做出貢獻，為了表彰你的努力，現在你是否願意再次晉升到新的職位上？");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2374).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(432);
            qm.gainItem(4032619, -1);
            qm.gainItem(1132021, 1);
            qm.sendOk("從現在開始，你就是上忍了，你將承載著影武者的希望，為飛花園開闢一個新的未來。");
            qm.dispose();
    }
}
