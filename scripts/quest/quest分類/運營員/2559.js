/*
     名字：飛向天際
     地图：104000000
     描述：維多利亞港
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 1) {
                qm.sendOk("誰都會想飛翔看看的，不是嗎？");
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
            qm.sendNext("您好，冒險家！今天因為有事報告所以聯絡您。");
            break;
        case 1:
            qm.sendNextPrev("今天的誘惑天空很藍吧？讓我想在天空中飛翔般呢，如果我能飛上天空心情會有多好呢？");
            break;
        case 2:
            qm.sendYesNo("突然說那什麼話啊？呵呵，如果我有能飛上天空的方法的話，你應該就會有興趣了吧？");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(2559).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

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
            qm.sendNext("嗯，因為新楓之谷GM的介紹而來的嗎？這樣啊，你也對飛機有興趣？");
            break;
        case 1:
            qm.sendNextPrev("你問我飛機是什麼？飛機可是新楓之谷新的移動方式喔！雖然也像其他騎乘般地可騎著來來去去，但說有可飛往其他大陸的功能呢！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(2559).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
