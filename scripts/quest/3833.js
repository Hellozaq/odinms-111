/*
     名字：尋找不夠的藥材
     地图：靈藥幻境
     描述：251000000
 */

var item = [2000, 1000, 500, 100, 50, 1];

var items = [2000005, 2020013, 2020013, 2020007, 2020007, 2000000];

var num = [100, 100, 50, 100, 50, 1];

var exp = [200000, 100000, 50000, 10000, 5000, 100];

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3833)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(3833).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("太好了，為了表示感謝，我會按照你帶回來的藥材數量給予特定獎勵。");
            break;
        case 1:
            qm.sendNextPrev("#e獎勵#n：\r\n\r\n1:）1顆#t4000294#獎勵#v2000000#\r\n\r\n2:）50顆#t4000294#獎勵50個#v2020007#\r\n\r\n3:）100顆#t4000294#獎勵100個#v2020007#\r\n\r\n4:）500顆#t4000294#獎勵50個#v2020013#\r\n\r\n5:）1000顆#t4000294#獎勵100個#v2020013#\r\n\r\n6:）2000顆#t4000294#獎勵100個#v2000005#");
            break;
        case 2:
            qm.sendYesNo("現在確定要領取#c4000294#顆#b#v4000294##t4000294##k的獎勵？");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.USE).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "消耗道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            for (var i = 0; i < item.length; i++)
                if (qm.getPlayer().itemQuantity(4000294) > item[i]) {
                    qm.gainItem(4000294, -item[i]);
                    qm.gainItem(items[i], num[i]);
                    qm.gainExp(exp[i]);
                    Packages.server.quest.MapleQuest.getInstance(3833).forceComplete(qm.getPlayer(), qm.getNpc());
                    qm.dispose();
                }
    }
}
