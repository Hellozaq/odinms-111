/*
     名字：第四個情報收集完成
     地图：奇幻村
     描述：105000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("哦，等等！！我想起來了。看到那邊的奇怪的石像了嗎？那尊雕像的來歷不詳，上面潦草地寫著亂七八糟的符號，很可能是洞穴的#b暗號#k。");
            break;
        case 1:
            qm.sendAcceptDecline("你可以過去仔細看看，如果真的是暗號，我們就馬上攻擊人偶師怎麼樣？……不，我們還是不要輕舉妄動，而是找到暗號後把這件事報告給#p1002104#吧。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21729).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
