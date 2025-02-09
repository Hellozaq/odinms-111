/*
     名字：亞普力耶
     地图：戰鬥結束後
     描述：910150000
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
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            cm.sendNextS("亞普力耶！你沒事吧？普力特呢？……呼，只是昏過去了……", 3);
            break;
        case 1:
            cm.sendNextPrevS("精靈遊俠……你還活著啊。", 1);
            break;
        case 2:
            cm.sendNextPrevS("當然！封印成功了，總不能一直坐在這裡吧！但是……你看上去好像不太好？沒事吧？其他人呢，大家去哪兒了？", 3);
            break;
        case 3:
            cm.sendNextPrevS("雖然封印黑魔法師成功了，但是因為他最後使用的魔法引起的爆炸，所有的東西都分崩離析，我們能在相同的地方，好像只是偶然。", 1);
            break;
        case 4:
            cm.sendNextPrevS("啊，是啊，飛了好遠，但還好沒事……", 3);
            break;
        case 5:
            cm.sendNextPrevS("是因為放鬆下來了嗎？沒有力氣……不，不僅僅是沒有力氣……感覺很冷。", 1);
            break;
        case 6:
            cm.sendNextPrevS("這裡原來就是經常下雪的地方嗎？四周都在燃燒，卻在下雪……真奇怪。", 3);
            break;
        case 7:
            cm.sendNextPrevS("……你沒有感覺到嗎，精靈遊俠？這可怕的詛咒……黑魔法師對你和普力特，以及所有其他人的詛咒。", 1);
            break;
        case 8:
            cm.sendNextPrevS("詛……咒？", 3);
            break;
        case 9:
            cm.sendNextPrevS("我看到可怕的寒氣在包圍你，在體力充沛的時候也許還好……但是戰鬥讓我們變弱了，現在非常危險……黑魔法師好像不會那麼輕易放過我們……", 1);
            break;
        case 10:
            cm.sendNextPrevS("其他人都會沒事的，因為大家都很強壯！但是我擔心普力特……那個傢夥，體力本來就很弱。", 3);
            break;
        case 11:
            cm.sendNextPrevS("普力特由我來照顧，別擔心…不過，我更擔心的是你，精靈遊俠，你是#b精靈之王#k，對你的詛咒…#b就是對所有精靈的詛咒#k，不是嗎？", 1);
            break;
        case 12:
            cm.sendNextPrevS("…!", 3);
            break;
        case 13:
            cm.sendNextPrevS("你快到#b櫻花處#k去，如果#b黑魔法師的詛咒真的會給全體精靈造成影響#k的話……身為國王的你必須去看一看。", 1);
            break;
        case 14:
            cm.sendNextPrevS("知道了！亞普力耶……我們還能再見面嗎？", 3);
            break;
        case 15:
            cm.sendNextPrevS("……希望如此。", 1);
            break;
        case 16:
            cm.sendPrevS("(雖然很擔心同伴們……但是現在只能相信他們，使用回城技能，回村子去吧。)", 3);
            break;
        case 17:
            cm.dispose();
            cm.getPlayer().changeMap(cm.getMap(910150001), cm.getMap(910150001).getPortal(0));
    }
}
