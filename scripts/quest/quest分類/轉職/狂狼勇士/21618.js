/*
     名字：狼的進化
     地图：狼之平原
     描述：140010210
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 1) {
                qm.sendOk("喚醒它吧！主人！");
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
            qm.sendNext("哦，你的這只好朋友狼，你看，我感覺到在她的毛皮後面隱藏著某種力量，那是等待被喚醒的力量。");
            break;
        case 1:
            qm.sendYesNo("如果你想徹底擁有這股力量，就必須具備一定的能力才能喚醒它，你是否有這個決心？");
            break;
        case 2:
            qm.sendPrev("現在的你應該有這個資格可以嘗試一下，讓這股力量覺醒，我也會幫助你的。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21618).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 0) {
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
            qm.sendAcceptDecline("主人！！請讓開，讓你看看瑪哈的强大威力!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1902018# #t1902018# 1");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21618).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainItem(1902017, -1);
            qm.gainItem(1902018, 1);
            qm.dispose();
    }
}
