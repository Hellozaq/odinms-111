/*
     名字：基礎體力鍛煉2
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
            if (status < 1) {
                qm.sendOk("您還沒準備好獵殺穆魯菲亞嗎？最好把該準備的都準備好再去狩獵比較好。如果不好好準備，在途中一命嗚呼了，那只會讓人遺憾罷了！");
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
            qm.sendAcceptDecline("那麼要繼續基礎體力鍛煉嗎？準備好了嗎？請您再確認劍是否裝備好了，技能和藥是否已經放入快捷欄內，然後就開始吧！");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(21016).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3"));
            qm.dispose();
    }
}
