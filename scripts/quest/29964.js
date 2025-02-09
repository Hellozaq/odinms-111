/*
     名字：聯盟的一員
     地图：聯盟的一員
     描述：燈泡
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("根據第1屆大陸會議的決議，由楓之谷世界所有職業成員組成的#b楓之谷聯盟#k誕生了。");
            break;
        case 1:
            qm.sendNextPrev("會議的結果挺讓人高興的……。");
            break;
        case 2:
            qm.sendPrev("真正的戰鬥從現在開始。我將為了大家可以摒棄之前的誤會，成為一個團結的整體而努力。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142355# #t1142355# 1");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(29964).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1142355, 1);
            qm.dispose();
    }
}
