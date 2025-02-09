/*
     名字：黑暗時間神殿
     地图：黑魔法師的房前徊廊
     描述：272010200
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            ms.dispose();
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
            if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31178)).getCustomData() == 1) {
                ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(8860001), new java.awt.Point(644, 71));
                ms.dispose();
                return;
            }
            ms.spawnNPCRequestController(2144019, 782, 8, 0);
            ms.sendNextS("(從某處傳來了低聲念咒文的聲音……)", 5, 2144019);
            break;
        case 1:
            ms.sendNextS("這是……！！阿卡伊農不會這麼快解除封印了吧？", 17);
            break;
        case 2:
            ms.sendNextPrevS("阿卡伊農！馬上停下來！", 17);
            break;
        case 3:
            ms.sendNextPrevS("......到了最後時間卻有點不足……作為扭曲時間的代價來說，好像太殘忍了。", 5, 2144019);
            break;
        case 4:
            ms.sendNextPrevS("竟敢妨礙我，你必須為此付出代價。你已經無路可逃了，這裡就是你的墳場。", 5, 2144019);
            break;
        case 5:
            ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31178)).setCustomData(1);
            ms.getClient().sendPacket(Packages.tools.packet.EtcPacket.NPCPacket.removeNPCController(2144019));
            ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(8860001), new java.awt.Point(644, 71));
            ms.dispose();
    }
}
