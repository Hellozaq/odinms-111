/*
     名字：莉琳
     地图：冰雪洞窟
     描述：140090000
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 1) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getInfoQuest(21019).indexOf("helper=clear") == -1) {
        switch (status) {
            case 0:
                cm.sendNext("您....終於醒了。");
                break;
            case 1:
                cm.sendNextPrevS("...你是誰？");
                break;
            case 2:
                cm.sendNextPrev("我已經在這等你好久了，等待那個與黑魔法師對抗的英雄甦醒。");
                break;
            case 3:
                cm.sendNextPrevS("等等，你說什麼..？你是誰...？");
                break;
            case 4:
                cm.sendNextPrevS("等等...我是誰...？我想不起以前的事情了...啊...我頭好痛啊.........。");
                break;
            case 5:
                cm.getPlayer().updateInfoQuest(21019, "helper=clear");
                cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/face"));
                cm.dispose();
                return;
        }
    }
    switch (status) {
        case 0:
            cm.sendNext("你還好嗎？");
            break;
        case 1:
            cm.sendNextPrevS("我...什麼都不記得了...這裡是哪裡？還有你是誰？");
            break;
        case 2:
            cm.sendNextPrev("放輕鬆，因為黑魔法師的詛咒，讓你想不起以前的事，只要你慢慢康复，我會幫助你想起所有事情的。");
            break;
        case 3:
            cm.sendNextPrev("你曾經是這裡的英雄，幾百年以前，你與你的朋友們對抗黑魔法師，拯救了楓之谷的世界，但那個時候，黑魔法師對你下了詛咒，將你#b冰凍#k起來，直到抹去你所有的記憶為止。");
            break;
        case 4:
            cm.sendNextPrev("這裡是瑞恩島，黑魔法師將您囚禁在此地，詛咒的氣候混亂，經年覆蓋冰霜和雪，你是在冰之窟的深處被發現的。");
            break;
        case 5:
            cm.sendNextPrev("我的名字是莉琳，是瑞恩島的成員，瑞恩族根據古老的預言從很久以前就等待#b英雄#k回來，如今...終於找到你了....。");
            break;
        case 6:
            cm.sendNextPrev("好像一下說太多了，就算你现在听不明白也沒有關係，你會慢慢知道所有事....我們先去村莊吧。在抵達村莊之前，如果還有什麼想知道，我會逐一向你說明。");
            break;
        case 7:
            cm.getPlayer().changeMap(cm.getMap(140090100), cm.getMap(140090100).getPortal(1));
            cm.getClient().sendPacket(Packages.tools.packet.EtcPacket.UIPacket.summonHelper(true));
            cm.dispose();
    }
}
