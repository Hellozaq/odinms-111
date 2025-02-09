/*
     名字：武器會給主人添麻煩
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
                qm.sendOk("你知道嗎？70級以後若為了以後的轉職，繼續升級努力累積SP但是它並無法使用在3轉技能。嗯，雖然不是說巨大的矛一定要幫你轉職...我只是說這樣而已。給你做參考。");
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
            qm.sendNext("修煉進行的還順利嗎？嗯…等級70了，啊...雖然稍嫌不足，但與一開始有氣無力的你作比較，現在看起來非常的前途無量。如果照這樣下去，一定會找回從前的力量。");
            break;
        case 1:
            qm.sendAcceptDecline("但是在這之前，先暫時回瑞恩島吧。你的矛再次出現了奇怪的反應。看起來好像有話要說。也許可以激發出你的能力，請儘快回來。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(21300).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
