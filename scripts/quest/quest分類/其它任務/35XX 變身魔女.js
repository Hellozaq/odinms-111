/*
     名字：找回遺失的記憶
     地图：變身魔女
     描述：變身魔女
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 6) {
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
            qm.sendNextS("什麼時候開始冒險的啊……真正意義上的冒險是從遇到愛絲卡達後開始的。不過在我心裏，成立赫裏希安攻擊隊的時候就已經開始冒險了。", 3);
            break;
        case 1:
            qm.sendNextPrevS("只有貝德羅斯和卡伊爾不嘲笑我沒有魔力，把我當做朋友……", 3);
            break;
        case 2:
            qm.sendNextPrevS("雖然我們三個現在各自走在不同的道路上，但小的時候，在一起無憂無慮地玩得很開心。", 3);
            break;
        case 3:
            qm.sendNextPrevS("我們一起被卡卡隆追趕，從山丘滾下去，還曾經一起扔精石怪的石塊玩……", 3);
            break;
        case 4:
            qm.sendNextPrevS("那時候三個人的關係都很好，在一起很開心。", 3);
            break;
        case 5:
            qm.sendNextPrevS("在我心中，赫裏希安攻擊隊據點永遠是我的家，貝德羅斯、卡伊爾和我，我們三個人無論選擇什麼樣的道路，都不會忘記兒時一起度過的愉快時光。", 3);
            break;
        case 6:
            Packages.server.quest.MapleQuest.getInstance(3523).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
