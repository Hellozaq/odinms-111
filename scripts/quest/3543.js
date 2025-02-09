/*
     名字：找回失去的回憶
     地图：精靈遊俠
     描述：精靈遊俠
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
            qm.sendNextS("回憶…到底在說什麼時候的回憶呢？是我和狂狼勇士、普力特以及其他英雄對抗黑魔法師的時候？或者是封印黑魔法師的那一刻？不……在更早之前，當我被選為精靈之王的那段時間？", 3);
            break;
        case 1:
            qm.sendNextPrevS("不會是從睡夢中醒來，驚嚇到等級10的那一刻的回憶吧…… 到底什麼時候的回憶？", 3);
            break;
        case 2:
            qm.sendNextPrevS("（你回憶起了你的整個過去，不確定該關注哪些記憶。然而，對生活的思考讓你充滿了溫暖。）", 3);
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3543).forceComplete(qm.getPlayer(), qm.getNpc());
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
