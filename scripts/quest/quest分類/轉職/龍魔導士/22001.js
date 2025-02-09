/*
     名字：餵食地獄獵犬
     地图：前院
     描述：100030102
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 2) {
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
            qm.sendNext("一大早就笑了半天，哈哈哈，對了！不要再說奇怪的話了，快點拿早餐給#b#p1013102##k。");
            break;
        case 1:
            qm.sendNextPrevS("咦？那不是#p1013101#要做的工作嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("這個傢伙！居然這樣叫哥哥！你又不是不知道獵犬有多討厭我，靠近的話一定會咬我，獵犬喜歡你，你拿去啦。");
            break;
        case 3:
            qm.gainItem(4032447, qm.getPlayer().itemQuantity(4032447) ? 0 : 1);
            qm.sendNextPrev("快點到左邊去把飼料拿給獵犬再回來，那隻狗從剛剛開始汪汪叫，可能是肚子餓了。");
            break;
        case 4:
            qm.sendPrev("把飼料拿給獵犬吃完就快點回來，我還有事情要和你說。");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(22001).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
