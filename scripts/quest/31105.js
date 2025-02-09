/*
     名字：被破壞的弓箭手村
     地图：被破壞的弓箭手村
     描述：271010000
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
            qm.sendNext("但是你到底是怎麼來的呢？自從受到西格諾斯的攻擊之後，和其他地區的聯繫就中斷了。");
            break;
        case 1:
            qm.sendNextPrevS("(不能說是從過去來的……)啊，我突然失去了知覺，醒來之後就到了這裡，我也不記得怎麼過來的了。你能給我說明一下現在的情況嗎？");
            break;
        case 2:
            qm.sendNextPrev("由於戰爭的衝擊，暫時失去記憶了嗎……西格諾斯在黑魔法師的影響下變得墮落了。楓之谷騎士團變成了我們的敵人。他們攻擊了我們，你也看到了，我們村……在那次襲擊中，我父親去世了……我不想再提起這悲傷的往事了。詳細的情況，你去問赫麗娜吧。");
            break;
        case 3:
            qm.sendPrevS("啊，好的，知道了。", 3);
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(31105).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
