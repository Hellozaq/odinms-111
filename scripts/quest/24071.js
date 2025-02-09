/*
     名字：襲擊者1
     地图：弓箭手培訓中心
     描述：100000201
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
            qm.sendNext("你能跟我說說和黑魔法師的戰鬥之後…到底發生了什麼事嗎？聽說你們把黑魔法師封印了起來。此外，為了保護#m101050000#，也把村子封印了起來，但是其它的我就不知道了……請告訴我。");
            break;
        case 1:
            qm.sendNextPrevS("#b說明了封印黑魔法師，受到黑魔法師詛咒，精靈們因為詛咒而被困在冰裏，把村子封印起來等待詛咒消失，因為封印變弱而醒來，以及村子現在的情况。");
            break;
        case 2:
            qm.sendNextPrev("這麼說，除了精靈遊俠之外，村裡醒過來的人就只有菲利屋司、丹妮卡和亞斯提那了。他們一定也變弱了……還好怪物也比以前弱了，不會發生什麼危險的事情。");
            break;
        case 3:
            qm.sendNextPrevS("#b對了……能跟我說說你的事情嗎？在我們去戰鬥的時候，我讓你到维多利亚岛避難，之後發生了什麼事情……現在的枫之谷世界怎麼樣了？ 跟我好好說說吧。");
            break;
        case 4:
            qm.sendNextPrevS("#b聽到了避難之後定居，建設村莊，在數百年時間裡一直很和平的枫之谷的事情。");
            break;
        case 5:
            qm.sendNextPrev("事實上，我以為黑魔法師會就此消失。看著卡伊琳為了給逝去的同伴報仇而奔走，我也仍然這麼認為…但是隨著新女皇#p1101000#的出現，情况發生了劇變。");
            break;
        case 6:
            qm.sendNextPrevS("#b新女皇……#p1101000#？");
            break;
        case 7:
            qm.sendNextPrevS("#b聽到了黑魔法師復活的傳聞，名叫黑色翅膀的組織開始活動，皇家騎士團的成立和凡雷恩的登場，等待。");
            break;
        case 8:
            qm.sendNextPrev("啊，我還見到了狂狼勇士，雖然因為時空扭曲，見面的過程有點複雜。");
            break;
        case 9:
            qm.sendNextPrevS("#b狂狼勇士？狂狼勇士還活著嗎？");
            break;
        case 10:
            qm.sendNextPrev("是的，雖然因為詛咒的影響，還沒完全恢復記憶。不光忘記了我，連黑魔法師的記憶也完全失去了，即使是這樣，他還是在和黑色翅膀戰鬥。");
            break;
        case 11:
            qm.sendNextPrevS("#b狂狼勇士……沒想到他還活著，還能再見到他嗎？");
            break;
        case 12:
            qm.sendNextPrev("他正在為了找回力量和記憶在枫之谷世界旅行，說不定可以遇到他。對了……雖然你可能很忙，不過…你能和我一起到#b#m101050000##k去一趟嗎？好久沒回村裡去了，我想回去看看。");
            break;
        case 13:
            qm.sendNextPrev("#p1033100#長老，#p1033101#姐姐……不，#p1033101#長老，#p1033102#長老，我非常想念他們，我們快去吧。");
            break;
        case 14:
            qm.sendPrev("啊……等等，我忘了一件事，我去取一下東西，你先去門口等我吧。");
            break;
        case 15:
            Packages.server.quest.MapleQuest.getInstance(24071).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
