/*
     名字：龍的種類與特徵(下)
     地图：粗岩地帶
     描述：102020400
 */

var status = -1;

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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22546)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(22546).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("哦，你終於來啦，我聽蓓蒂博士說，為了找那本書，你好像在維多利亞島上轉了一大圈。雖然這麼晚才還回來，但是我想你也一定很辛苦，我就不多計較了，你在書裡面找到想要的知識了嗎？你想知道什麼呢？");
            break;
        case 1:
            qm.sendNextPrevS("我想瞭解一下歐尼斯龍……");
            break;
        case 2:
            qm.sendNextPrev("歐尼斯龍？我也看過那本書，歐尼斯龍不是已經滅絕了嗎？你在進行相關的研究嗎？沒想到你竟然研究這麼高深的學問。好吧，我會盡我的能力來幫助你的。");
            break;
        case 3:
            qm.sendNextPrev("雖然魔法森林圖書館有很多關於龍的書，但關於歐尼斯龍的只有這一本。等魔法森林圖書館有了新書之後，我會通知你的。");
            break;
        case 4:
            qm.sendNextPrev("還有，我的朋友之中，有個名叫村長塔塔曼的人，他是矮人族，是在神木村侍奉龍的種族。我會問問他有關歐尼斯龍的事情，有消息的話，我會告訴你的。");
            break;
        case 5:
            qm.sendNextPrev("歐尼斯龍……歐尼斯龍長著黑色透明的鱗片和金色的角，你的蜥蜴的角雖然是金色的，但鱗片卻不是黑色的……嗯……");
            break;
        case 6:
            qm.sendNextPrevS("如果被寶貝龍發現是龍的話，也許會把它殺掉！它不是龍，是蜥蜴。");
            break;
        case 7:
            qm.sendPrev("哎呦，我的耳朵，知道了，誰說它是龍了？是的，它應該是蜥蜴……嗯，歐尼斯龍……\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(22546).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(10000);
            qm.dispose();
    }
}
