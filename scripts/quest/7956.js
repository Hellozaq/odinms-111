/*
     名字：初學採礦夫必要的
     地图：專業技術村 &amp;lt;梅斯特鎮&gt;
     描述：910001000
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7956)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(7956).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("很不錯，你籌齊了我所需要的東西，#b#t4020004# 10個#k、#b#t4010004#  10個#k、#b#t4011010#  10個#k、還有 #b10000#k楓幣。");
            break;
        case 1:
            qm.sendPrev("希望以後你能再接再厲，我會一直關注你的！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4330007# #t4330007# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(7956).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainMeso(-10000);
            qm.gainItem(4020004, -10);
            qm.gainItem(4010004, -10);
            qm.gainItem(4011010, -10);
            qm.gainItem(4330007, 1);
            qm.dispose();
    }
}
