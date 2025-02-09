/*
     名字：阿卡伊農的下落
     地图：燃燒的神木村4
     描述：272000410
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
            qm.sendNext("原來在這裡啊。讓我找了好久。我從克勞烏那裡收到了報告，說#b#h0##k你救了雪莉。");
            break;
        case 1:
            qm.sendNextPrevS("#b那是必須要做的事情。對了，阿卡伊農好像到封印黑魔法師的過去的時間神殿去了。");
            break;
        case 2:
            qm.sendNextPrev("是嗎？……已經找到阿卡伊農的痕跡了嗎?……比我預想的還要快。");
            break;
        case 3:
            qm.sendNextPrevS("#b……凱雷特？");
            break;
        case 4:
            qm.sendNextPrev("呵呵，我不能讓你這樣卑賤的東西跟在阿卡伊農後面，這裡將是你的墳墓……..");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(31176).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(31187).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300487), new java.awt.Point(345, 2));
            qm.dispose();
    }
}
