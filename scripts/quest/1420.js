/*
     名字：弩弓箭手之路
     地图：弓箭手培訓中心
     描述：100000201
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
            qm.sendNext("你想成為真正的弩弓箭手嗎？弩弓箭手是在弓和弩當中使用弩的職業，速度雖比一般弓箭慢，但破壞力則相對強大，不論對付哪一種敵人，都可以#b一箭貫穿#k。");
            break;
        case 1:
            qm.sendNextPrev("弩弓箭手能使用的技能，包括熟悉武器的精準之弩，提高攻擊速度的快速之弩，具有強力傷害的穿透之箭，還有提升機動性的#b#q3201003##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為弩弓箭手嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到弓箭手試驗場去。");
            break;
        case 4:
            if (qm.getMap(910070000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1420).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910070000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910070000), qm.getMap(910070000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(100000201));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "弓箭手試驗場目前擁擠，請稍後再試"));
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
            qm.sendYesNo("我充分確認了你的能力，我將幫你指引上弩弓箭手的道路……你準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1420).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(320);
            qm.removeAll(4031013);
            qm.sendNext("從現在開始你就是弩弓箭手了，弩弓箭手是憑藉銳利的眼睛，將箭射入敵人胸膛的賢明之人，希望你繼續努力修煉。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變強更難。");
            break;
        case 3:
            qm.dispose();
    }
}
