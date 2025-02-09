/*
     名字：使用矛的英雄
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
                qm.sendOkS("再慎重的考慮一下", 3);
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
            qm.sendNextS("摸了一下巨大的矛。奇怪的是應該是冰冷的矛，卻感覺異常的溫暖。好像想起了以前的記憶。", 3);
            break;
        case 1:
            qm.sendNextPrevS("…使用矛的英雄是個以強大的力量和體力為基礎，擅長使用各種技能，擅長近戰的戰士…。");
            break;
        case 2:
            qm.sendNextPrevS("…因為擁有高力量，且還有少量的敏捷，所以單純以力量是揮不動的…。");
            break;
        case 3:
            qm.sendYesNoS("這是我的記憶還是英雄同伴的記憶…慎重考慮後，為了確認還是在摸一下吧。", 3);
            break;
        case 4:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(21101).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(2100);
            qm.resetStats(35, 4, 4, 4);
            qm.gainItem(1142129, 1);
            qm.getPlayer().changeMap(qm.getMap(914090100), qm.getMap(914090100).getPortal(0));
            qm.dispose();
    }
}
