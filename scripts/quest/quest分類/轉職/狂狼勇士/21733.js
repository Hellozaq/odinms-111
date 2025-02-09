/*
     名字：奇怪的情報收集
     地图：危險的資料商店
     描述：910400000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            if (status < 2) {
                qm.sendOk("說什麼啊？急什麼！不要說廢話，快點過來！");
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
            qm.sendSimple("喂，在那裡？有急事！\r\n#L0##b(喂…？#p1002104#好像一直叫我英雄大人啊…)#l");
            break;
        case 1:
            qm.sendAcceptDecline("有很重要的情報！快來到#b#m104000004##k！");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21733).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendNext("啊……沒想到還會碰上這種事情。怎麼都沒想到傀儡師還會潛伏到這裡來。平時大概是疏於修煉了，完全被對方給算計了。");
            break;
        case 1:
            qm.sendNextPrevS("對不起，都是因為我……");
            break;
        case 2:
            qm.sendNextPrev("啊？英雄大人不必內疚。你也不知道那傢夥會來啊。不必道歉。不過，這也暴露出了他們的弱點。");
            break;
        case 3:
            qm.sendNextPrevS("弱點？");
            break;
        case 4:
            qm.sendNextPrev("傀儡師很在乎那個文件。如果那個文件是假的，傀儡師是不會這麼興師動眾，帶著一群人跑來折騰的。那個文件充分證明了黑色翅膀的目標其實是#b維多利亞封印石#k。");
            break;
        case 5:
            qm.sendNextPrevS("話雖這麼說，但我的位置也暴露了。");
            break;
        case 6:
            qm.sendNextPrev("別擔心。這次我為了拿莉琳寄過來的信件才出去的，沒想到中了敵人的招。平時我不會這麼不小心的。好歹也是個情報商人，總會為自己準備一條退路的。現在關鍵的是#b#s21100000# #q21100000##k這個技能你知道嗎？");
            break;
        case 7:
            qm.sendNextPrevS("#b#q21100000##k？");
            break;
        case 8:
            qm.sendNextPrev("啊？你不知道？因為有矛這個字，所以我還以為肯定是你的技能呢。");
            break;
        case 9:
            qm.sendPrev("不過話說，黑色翅膀再怎麼興風作浪也沒法阻止你日益強大起來。繼續努力，直到擊敗黑魔法師為止。我也會盡最大努力為你收集資訊的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100000# #q21100000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5700 exp");
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(21733).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(21100000), qm.getPlayer().getSkillLevel(21100000), 20, -1);
            qm.gainExp(5700);
            qm.dispose();
    }
}
