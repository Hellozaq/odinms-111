/*
     名字：基礎體力鍛煉3
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
            if (status == 5) {
                qm.sendOkS("#b可是又不能這樣逃走....鎮定心情後再談看看。", 3);
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
            qm.sendNext("現在筋骨應該都鬆開了吧！此時更嚴格的鍛鍊，才能擁有完美的基礎體力。好！那麼我們繼續進行基礎體力鍛煉。");
            break;
        case 1:
            qm.sendNextPrev("現在前往雪平原3擊退穆魯穆魯吧，只要擊退....20隻左右，會對鍛煉體力有很大的幫助。好，快去吧...咦？你有話想說嗎？");
            break;
        case 2:
            qm.sendNextPrevS("#b........為什麼數字愈來愈多.....？");
            break;
        case 3:
            qm.sendNextPrev("當然會增加，哎呀，您覺得20隻太少嗎？那麼去擊退100隻怎麼樣啊？不，不。既然要修煉，那麼就效法奇幻村的某人要求去抓999隻怪物..");
            break;
        case 4:
            qm.sendNextPrevS("#b不，不用啦！這樣就夠了。");
            break;
        case 5:
            qm.sendAcceptDecline("哎呀哎呀，沒有必要推辭。我完！全！的！了解英雄想快點變強的心情。英雄真的太偉大了...");
            break;
        case 6:
            qm.sendNextPrevS("#b再聽一次好像真的要我去擊退999隻，乾脆答應算了。");
            break;
        case 7:
            qm.sendPrev("那麼請前往#b#m140020200##k擊退#o0100133#20隻吧。");
            break;
        case 8:
            Packages.server.quest.MapleQuest.getInstance(21017).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getClient().sendPacket(Packages.tools.packet.EtcPacket.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3"));
            qm.dispose();
    }
}
