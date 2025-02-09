/*
     名字：巫師(火， 毒)之路
     地图：魔法森林圖書館
     描述：101000003
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 2) {
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
            qm.sendNext("比法師更高等級的職業稱為巫師，火毒巫師就像名字所說，因為可以使用的火屬性和毒屬性的魔法，所以才被稱為火毒巫師。");
            break;
        case 1:
            qm.sendNextPrev("火毒巫師能使用的技能，包括熟悉魔法的咒語精通，吸收敵人魔量的魔力吸收，提高隊員魔力的精神強化，還有使智力得到提高的#b#q2100007##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為火毒巫師嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到法師試驗場去。");
            break;
        case 4:
            if (qm.getMap(910140000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1415).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910140000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910140000), qm.getMap(910140000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101000003));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "法師試驗場目前擁擠，請稍後再試"));
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
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
            qm.sendYesNo("我知道你一定可以做到，你的表現很優異，好的，讓我來把你升職為巫師，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1415).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(210);
            qm.removeAll(4031013);
            qm.sendNext("從現在開始，你就是火毒巫師了……巫師是以較高的智力為基礎，使用自然力量壓制敵人的人……希望你一定要努力新增學識…..");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，將自己的力量用在正確的道路上……遠比變強難得多…..");
            break;
        case 3:
            qm.dispose();
    }
}
