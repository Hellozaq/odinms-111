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
            qm.sendNext("哎呀……這不是我們的英雄嗎？呵呵，能在村裡見到你，真讓人高興。雖然自由和和平被奪走了，但這裡還是最美的地方。");
            break;
        case 1:
            qm.sendNextPrevS("現在身體好一點了嗎？");
            break;
        case 2:
            qm.sendNextPrev("是的，吉可穆德的藥很管用，我已經好多了。幾乎已經完全恢復到以前的狀態了。不過有一個很大的問題。");
            break;
        case 3:
            qm.sendNextPrevS("又有什麼問題？難道黑色翅膀又在策劃什麼陰謀？");
            break;
        case 4:
            qm.sendYesNo("這次的問題不是別的……就是你！你太強了我的作用都變弱了。不過我可是教授末日反抗軍機械的老師，居然比徒弟還弱……所以我要給你更難的課題，你願意接受嗎？");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(23054).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3512);
            qm.sendNext("我已經讓你轉職了，同時把我可以製作的最強的機器人送給了你。那些東西連我都無法完全控制，無法完全發揮出它們的能力……不過我想你一定可以做到。因為你是末日反抗軍最強的機甲戰神。");
            break;
        case 6:
            qm.sendNext("現在我的課程……已經快要結束了。但是現在還不會結束。雖然你確實比我強了，但是你還有很多要向我學習的地方。我們下次課程再見吧。雖然不知道下次課程什麼時候會開始……。");
            break;
        case 7:
            qm.sendPrev("在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 8:
            qm.dispose();
    }
}
