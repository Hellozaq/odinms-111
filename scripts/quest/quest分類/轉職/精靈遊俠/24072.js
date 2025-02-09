/*
     名字：襲擊者2
     地图：受到攻擊的弓箭手村右側
     描述：910080010
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
            qm.sendNext("組成聯盟之後，我偶爾會感覺到黑色翅膀在監視我，但是…從來沒有這樣發動過襲擊，他們好像知道了我想把#b銀檞之槍#k還給你。");
            break;
        case 1:
            qm.sendNextPrevS("銀檞之槍……？你還留著嗎？");
            break;
        case 2:
            qm.sendNextPrev("那當然，這是國王陛下暫時交給我保管的東西，我當時不清楚自己的力量，還想跟著你到那麼危險的地方去，你是為了保護我才把它交給我的……但是現在村子有危險，所以我想把它還給你。");
            break;
        case 3:
            qm.sendNextPrevS("但是為什麼不襲擊你，而襲擊我呢？");
            break;
        case 4:
            qm.sendNextPrev("…黑色翅膀中有具有變身能力的人，他們可能想除掉你，然後變成你的樣子，拿走銀檞之槍。");
            break;
        case 5:
            qm.sendNextPrevS("沒想到他們還有這種能力……");
            break;
        case 6:
            qm.sendNextPrev("是的，比起武力，他們在這個方面更加危險……他們……一定是聽到了我和你的對話。那樣的話，他們應該已經知道了#m101050000#……精靈遊俠！我們快到村裡去！");
            break;
        case 7:
            qm.sendPrev("他們的第一個計策失敗了，接下去……說不定會#b攻擊#m101050000##k！抓走人質，讓你把銀檞之槍交出去！雖然可能是臆測……我來使用回城魔法！");
            break;
        case 8:
            if (qm.getMap(910150220).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(24072).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910150220).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910150220), qm.getMap(910150220).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(100000201));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "受到攻擊的發光的洞穴之路目前擁擠，請稍後再試"));
            qm.dispose();
    }
}
