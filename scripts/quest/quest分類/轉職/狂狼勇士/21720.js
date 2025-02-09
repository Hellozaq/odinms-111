/*
     名字：傀儡師的警告
     地图：特魯的情報商店
     描述：104000004
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(21720)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(21720).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("有什麼事嗎？你不是一直在維多利亞上修煉嗎？特魯還帶口信說你幫了大忙了……什麼？黑色翅膀？");
            break;
        case 1:
            qm.sendNextPrevS("講述有關傀儡師、黑色翅膀，以及黑色翅膀的目的事情。");
            break;
        case 2:
            qm.sendNextPrev("原來是這樣……叫黑色翅膀啊。居然還有這麼一幫人……明知很危險也要在楓之谷的世界裏復活黑魔法師，太不像話了。");
            break;
        case 3:
            qm.sendNextPrevS("是，是啊……他的語氣突然變得很決斷，好可怕。");
            break;
        case 4:
            qm.sendNextPrev("預言裏只說到英雄會蘇醒，與黑魔法師戰鬥。但我還一直半信半疑，這下我才明白黑魔法師是真的存在的。");
            break;
        case 5:
            qm.sendNextPrevS("是不是很可怕？");
            break;
        case 6:
            qm.sendNextPrev("有什麼可怕的？管他是什麼黑魔法師還是什麼別的，你都會將他們一一打倒的，還有什麼好擔心的呢？我們只會覺得鬥志更加高漲。啊，對了，我發現了這個#b技能#k#s21001003# #q21001003#……看一眼嗎？");
            break;
        case 7:
            qm.sendNextPrev("這個技能是在一個古老的神秘書籍中發現的。我有預感這可能是你過去用過的一種技能，我想我是對的。");
            break;
        case 8:
            qm.sendNextPrev("你正在漸漸地變得強大起來。我也會一直傾盡全力幫助你。還有什麼好害怕的呢？千萬不能退縮。我們為了打敗黑魔法師不是已經等待了數百年了嗎？這次一定會取得勝利的。");
            break;
        case 9:
            qm.sendPrev("呐，為了這個目標必須繼續修煉！修煉明白嗎？前往維多利亞繼續修煉吧。一定要練到能打敗黑魔法師的程度才行！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21001003# #q21001003# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1700 exp");
            break;
        case 10:
            Packages.server.quest.MapleQuest.getInstance(21720).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(21001003), qm.getPlayer().getSkillLevel(21001003), 20, -1);
            qm.gainExp(1700);
            qm.dispose();
    }
}
