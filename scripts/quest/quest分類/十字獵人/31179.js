/*
     名字：最後的報告
     地图：時間裂縫
     描述：272000000
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
            qm.sendNext("我正在等你，這段時間，我一直在調查除我之外的其他工作員有沒有受到阿卡伊勒的影響。還好其他工作員沒事。過去的情況怎麼樣了？");
            break;
        case 1:
            qm.sendNextPrevS("#b幸虧及時除掉了阿卡伊農的分身，(講訴了之前發生的一切)。");
            break;
        case 2:
            qm.sendNextPrev("這是我最近聽到的最好的消息之一，那麼，阿卡伊農的陰謀已經全部封鎖了嗎？");
            break;
        case 3:
            qm.sendNextPrevS("#b據說阿卡伊農的分身仍然存在，優伊娜說可以通過時間裂縫到達他所在的次元縫隙。");
            break;
        case 4:
            qm.sendNextPrev("這次必須真的把他打敗才行，要是可以的話，我很想讓你休息一下，但是現在不是時候，非常抱歉。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(31179).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
