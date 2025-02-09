/*
     名字：找回遺失的記憶
     地图：林之林
     描述：林之林
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
            qm.sendNextS("咦？你是誰？");
            break;
        case 1:
            qm.sendNextPrev("嗯嗯……這是我媽媽做的地精香水的味道！！");
            break;
        case 2:
            qm.sendNextPrev("還有，這種耳朵和尾巴…是少年時代！原來還好好活著啊！");
            break;
        case 3:
            qm.sendNextPrevS("該…不會現在還有味道吧？？");
            break;
        case 4:
            qm.sendNextPrev("好了…對了。聽說過傳聞了吧？");
            break;
        case 5:
            qm.sendNextPrev("這段期間和村莊附近的地精們說過話。");
            break;
        case 6:
            qm.sendNextPrevS("又…在吹牛了嗎？");
            break;
        case 7:
            qm.sendNextPrev("算了，有對象了嗎？");
            break;
        case 8:
            qm.sendNextPrevS("(我們就這樣聊天聊了好一陣子)");
            break;
        case 9:
            qm.sendNextPrev("那我就拭目以待你下一趟冒險囉！");
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(3523).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
