/*
     名字：決心
     地图：詛咒的餘波
     描述：詛咒的餘波
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
            qm.sendNextS("雖然感覺不到說話的樹的一點誠意，但是它的回答也許說得沒錯。", 3);
            break;
        case 1:
            qm.sendNextPrevS("對我而言，和黑魔法師的戰鬥就像是昨天的事情一樣，但是對其他人來說，只不過是發生在數百年，只有在歷史書中才能看到的事情而已……", 3);
            break;
        case 2:
            qm.sendNextPrevS("用來保護楓之谷世界的力量全部失去了。連對付綠水靈都手忙腳亂的我，不能再弱了。", 3);
            break;
        case 3:
            qm.sendNextPrevS("情況和以前不同了。之前我的身邊有可靠的同伴，但現在什麼人都沒有……沒有人……", 3);
            break;
        case 4:
            qm.sendNextPrevS("但是……但是！不能就這樣放棄！", 3);
            break;
        case 5:
            qm.sendNextPrevS("我必須站起來，因為我是國王，是因為黑魔法師的詛咒而困在冰裡的精靈們的國王……", 3);
            break;
        case 6:
            qm.sendNextPrevS("#b國王的詞典裡沒有放棄兩個字！", 3);
            break;
        case 7:
            qm.sendNextPrevS("不能放棄的話，就必須決定應該怎麼做！必須把痛苦的精靈們從詛咒中解救出來！只要努力提高力量，就一定可以解開黑魔法師的詛咒！", 3);
            break;
        case 8:
            qm.sendPrevS("雖然我現在很弱很弱……但只要積累經驗，一定可以重新恢復之前的力量。不要著急。一步一步來……先做應該做的事情，能做的事。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 2000 exp", 3);
            break;
        case 9:
            Packages.server.quest.MapleQuest.getInstance(24051).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(2000);
            qm.dispose();
    }
}
