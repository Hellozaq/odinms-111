/*
     名字：基礎體力鍛煉1
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
            if (status > 1) {
                qm.sendOk("還說您是英雄，怎麼會這麼猶豫不決？您沒聽過打鐵要趁熱嗎？想要變強的話，那就快點開始吧！");
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
            qm.sendNext("那麼，說明就到此結束，現在進入下一個階段。下一個階段是什麼呢？剛剛才跟您說過不是嗎？要修煉變強到你可以除掉黑魔法師的程度。");
            break;
        case 1:
            qm.sendNextPrev("您雖然過去是英雄，可是那已經是幾百年前的事了。就算不是黑魔法師的詛咒，待在冰雪當中這麼長的時間，身體一定會變得很僵硬吧！首先先鬆開僵硬的身體。您問該怎麼做是嗎？");
            break;
        case 2:
            qm.sendAcceptDecline("體力就是國力！英雄的基礎就是體力！…您沒聽過這些話嗎？當然要先做基礎體力鍛煉…啊！您喪失記憶所以什麼都忘了。不知道也沒關係。那麼現在就進入基礎體力鍛煉吧！");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(21015).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3"));
            qm.dispose();
    }
}
