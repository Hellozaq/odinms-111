/*
     名字：超越我的你
     地图：秘密廣場
     描述：310010000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status == 4) {
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
            qm.sendNext("哎呀……這不是我們的英雄嗎？呵呵，能在村裡見到你，真讓人高興。雖然我們村被黑色翅膀佔領了，但我們村還是最美的。不是嗎？");
            break;
        case 1:
            qm.sendNextPrevS("身體現在沒事了吧？");
            break;
        case 2:
            qm.sendNextPrev("嗯，吉可穆德的本事很好，我已經沒事了。現在已經完全恢復到了過去的狀態。不過還有一個問題。");
            break;
        case 3:
            qm.sendNextPrevS("又有什麼問題？難道黑色翅膀又在策劃什麼陰謀？");
            break;
        case 4:
            qm.sendYesNo("不，這次的問題就是…你！你變得太強大了，居然做到了連我都做不到的事情。這可太讓我羞愧了！所以我要給你一個更難的課題！你願意接受嗎？");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(23052).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3212);
            qm.sendNext("我已經讓你轉職了。同時我把我知道的，但又無法熟練掌握的所有最高的技能傳授給了你。雖然我沒能完全掌握它們，但我相信你一定可以做到。你是我們末日反抗軍中的最強者！還有什麼做不到的呢？");
            break;
        case 6:
            qm.sendNext("這是我的最後一項課程了嗎……不，不可能。我可是很有能力的末日反抗軍。現在你比我強，但你還有能跟我學習的吧？所以……下個課程見吧。雖然不知道什麼時候能開始。");
            break;
        case 7:
            qm.sendPrev("在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 8:
            qm.dispose();
    }
}
