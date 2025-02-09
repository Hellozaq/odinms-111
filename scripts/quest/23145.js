/*
     名字：後悔
     地图：秘密廣場
     描述：310010000
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
            qm.sendNext("……斐勒呢？沒能把那個孩子救出來嗎？");
            break;
        case 1:
            qm.sendNextPrevS("(講述洞穴裡傑利麥勒的陷阱，最後斐勒在爆炸中消失的事情……)");
            break;
        case 2:
            qm.sendNextPrev("……原來如此……斐勒……");
            break;
        case 3:
            qm.sendNextPrevS("……");
            break;
        case 4:
            qm.sendNextPrev("我太愚蠢了。那個孩子剛來的時候，我應該好好照顧他的……竟然不知道那個孩子被傑利麥勒洗腦，遭到了支配……");
            break;
        case 5:
            qm.sendNextPrev("至少……皇家騎士團送來羽毛草的時候，應該收下的……不，在送還藥草的時候，應該接受他們的幫助……");
            break;
        case 6:
            qm.sendNextPrev("是我太傲慢了嗎？我以為只靠我們的力量就能擊敗黑色翅膀，結果卻被傑利麥勒玩弄於股掌之中。斐勒也……");
            break;
        case 7:
            qm.sendPrev("對不起。請給我一點思考的時間……你也應該需要時間來整理一下心情。");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(23145).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
