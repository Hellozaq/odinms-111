/*
     名字：詭異的約翰
     地图：維多利亞港
     描述：104000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("這件事情我不方便去做，所以請你幫助我。");
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
            qm.sendAcceptDecline("嘿！！可以答應一個請求嗎？因為最近#b#p20000##k有點怪怪的。");
            break;
        case 1:
            qm.sendNext("直到最近，他還經常對自己的關節炎愁眉苦臉，發牢騷，但他突然變得非常高興，滿臉笑容。");
            break;
        case 2:
            qm.sendNextPrev("我感覺那個約翰的箱子背後有個秘密。你能偷偷地看看旁邊的木箱嗎？");
            break;
        case 3:
            qm.sendPrev("你知道約翰的箱子在哪裡，對嗎？它在右邊。一直往前走，然後穿過懸掛的鯊魚和章魚，你就會看到#b#p1204033##k。");
            break;
        case 4:
            Packages.server.quest.MapleQuest.getInstance(21766).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("快點告訴我……！");
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
            qm.sendYesNo("你知道木頭箱子裡有什麼東西啊？快點告訴我……！！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
            break;
        case 1:
            qm.sendNext("你是說，箱子裡面只是一些普通用品，沒有什麼值得奇怪的東西，那就奇怪了！");
            Packages.server.quest.MapleQuest.getInstance(21766).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(200);
            qm.dispose();
    }
}
