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
            qm.sendNext("哎呀……這不是我們的英雄嗎！哈哈哈，在村裡見到你，你看上去帥多了。雖然我們村被黑色翅膀佔領了，但這裡還是最美的。不是嗎？");
            break;
        case 1:
            qm.sendNextPrevS("現在身體好一點了嗎？");
            break;
        case 2:
            qm.sendNextPrev("雖然還有點疼，不過吉可穆德的手藝是最好的。我已經幾乎恢復到過去的狀態了。不過有一個問題。");
            break;
        case 3:
            qm.sendNextPrevS("又有什麼問題？難道黑色翅膀又在策劃什麼陰謀？");
            break;
        case 4:
            qm.sendYesNo("這次的問題不是別的……就是你！你太強了所以我變得不用出面了！不過我可是末日反抗軍最棒的狂豹獵人，現在都不能教你了！所以我要給你更難的課題！你願意接受嗎？");
            break;
        case 5:
            Packages.server.quest.MapleQuest.getInstance(23053).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(3312);
            qm.sendNext("我已經讓你轉職了。同時把我知道的，但又無法自由操控的最高的技能傳授給了你。雖然連我都無法做到，但我想你一定可以做到。這是理所當然的事情，不是嗎？因為你是我們末日反抗軍中最強的人！");
            break;
        case 6:
            qm.sendNext("這是我的最後一項課程……才怪。我可是很有能力的。雖然你比我強，但你還有能跟我學習的吧？所以……下個課程見吧。雖然不知道什麼時候能開始。");
            break;
        case 7:
            qm.sendPrev("在那之前，希望你能以末日反抗軍的身份，繼續努力。");
            break;
        case 8:
            qm.dispose();
    }
}
