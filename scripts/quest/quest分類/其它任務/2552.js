/*
     名字：哈姆梅爾的禮物
     地图：專業技術村 &amp;lt;梅斯特鎮&gt;
     描述：910001000
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
            qm.sendNext("呵呵呵～這麼快就聽完斯塔切的第一堂采藥課了嗎？為了表示鼓勵，我為你準備了一件小禮物。");
            break;
        case 1:
            qm.sendNextPrev("通過專業技術村最右側的傳送口可以前往只有斯塔切才知道的秘密農場。那裡#b遍佈著適合製藥的藥草#k。");
            break;
        case 2:
            qm.sendPrev("那你多加努力，爭取早日成為優秀的製藥達人！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001482# #t4001482# 1");
            break;
        case 3:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(2552).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4001482, 1);
            qm.dispose();
    }
}
