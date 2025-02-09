/*
     名字：初學採集者必要的東西
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(7955)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(7955).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("很不錯，你籌齊了我所需要的東西，#b#t4022000# 10個#k、#b#t4022001# 10個#k、#b#t4022023# 10個#k、還有 #b10000#k楓幣。");
            break;
        case 1:
            qm.sendPrev("希望以後你能再接再厲，我會一直關注你的！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4330003# #t4330003# 1");
            break;
        case 2:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(7955).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainMeso(-10000);
            qm.gainItem(4022000, -10);
            qm.gainItem(4022001, -10);
            qm.gainItem(4022023, -10);
            qm.gainItem(4330003, 1);
            qm.dispose();
    }
}
