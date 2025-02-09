/*
     名字：前往封印庭園的路
     地图：老婆之屋
     描述：200050001
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21739)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21739).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("人少的散步道的侵入者已經擊退了？");
            break;
        case 1:
            qm.sendNextPrevS("講述#b#m920030000##k發生的事情。");
            break;
        case 2:
            qm.sendNextPrev("黑色翅膀的其他成員？他得到了天空之城的封印石？哦！！！不！！太可怕了！");
            break;
        case 3:
            qm.sendNextPrevS("那我們現在應該怎麼辦？#b天空之城的封印石#k有什麼作用嗎？");
            break;
        case 4:
            qm.sendNextPrev("沒有了封印石的天空之城，誰也不知道將來會發生什麼樣的變故，只能拭目以待。");
            break;
        case 5:
            qm.sendPrevS("看來我要先回去，把天空之城的情況如實的向特魯彙報。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp", 3);
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(21739).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(12000);
            qm.dispose();
    }
}
