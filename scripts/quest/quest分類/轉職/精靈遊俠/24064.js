/*
     名字：亞斯提那的呼喚
     地图：櫻花處
     描述：101050000
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
            qm.sendNextPrev("精靈遊俠……");
            break;
        case 1:
            qm.sendNextPrevS("#p1033102#！你的身體沒事吧？！");
            break;
        case 2:
            qm.sendNextPrev("是的，還好我這個老太婆沒什麼不舒服的地方，我很健康。雖然力量變弱了，但是沒問題。");
            break;
        case 3:
            qm.sendNextPrevS("啊…太好了。#p1033100#和#p1033101#全都很結實，但是我很擔心#p1033102#你。");
            break;
        case 4:
            qm.sendNextPrev("多謝國王陛下的擔心，我沒事。呵呵呵……國王陛下一個人先醒過來，一定經歷了不少事情吧？");
            break;
        case 5:
            qm.sendNextPrevS("嗯，但是沒遇到什麼困難。");
            break;
        case 6:
            qm.sendPrev("你小小年紀就登上了王位，甚至還見過黑魔法師，你歷經的苦難讓你看起來成熟穩重……看來磨練使人成長這句話果真沒錯啊。");
            break;
        case 7:
            Packages.server.quest.MapleQuest.getInstance(24064).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
