/*
     名字：我是沒有感情的玩偶
     地图：第1礦場
     描述：310050400
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendNext("我不是人類，我叫傑特，是個沒有感情的機器人。因此我感覺不到恐懼，所以適合在黑暗的地下坑道中負責警衛工作。");
            break;
        case 1:
            qm.sendNextPrevS("怎麼看都覺得你很像人類啊……？");
            break;
        case 2:
            qm.sendNextPrev("是嗎？但是我無法通過攝取食物獲得能量，必須奪取他人的能量，轉化為生物能量使用。簡單地說，就是殺死其他生物，奪取能量。");
            break;
        case 3:
            qm.sendNextPrevS("#b(好像有點可怕……)#k");
            break;
        case 4:
            qm.sendNextPrev("現在剩餘的能量不多了，需要更換能量記憶體。為了提高工作效率，在我站崗的時候，請你去幫我為能量記憶體補充能量。");
            break;
        case 5:
            qm.sendPrev("我把能量記憶體交給你。請你補充滿生物能量之後再還給我。打獵怪物，能量就會自動地流入能量記憶體，變成生物能量。");
        case 6:
            if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                qm.dispose();
                return;
            }
            Packages.server.quest.MapleQuest.getInstance(23961).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(23980).forceStart(qm.getPlayer(), qm.getNpc(), 0);
            qm.gainItem(4220178, 1);
            qm.dispose();
    }
}

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
            qm.sendNextPrev("我需要確認一下能量記憶體是否已經充滿。確認完成。任務完成。");
            break;
        case 1:
            qm.sendNextPrev("謝謝你。幫我為備用能量記憶體充滿了能量。是的，備用能量記憶體。站崗時使用的工作用能量記憶體已經充滿了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 102822 exp");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(23961).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(4220178, -1);
            qm.gainExp(102822);
            qm.dispose();
    }
}
