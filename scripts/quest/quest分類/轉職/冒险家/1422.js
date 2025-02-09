/*
     名字：刺客之路
     地图：墮落城市酒吧
     描述：103000003
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
            qm.sendNext("你想選擇刺客之路嗎？呼……這可不是一條容易走的路，刺客是主要使用飛鏢的盗贼，擅長遠距離快速攻擊敵人，移動速度非常快，攻擊力很强，被稱為1:1的最强者。");
            break;
        case 1:
            qm.sendNextPrev("刺客能使用的技能，包括熟悉武器的精準暗器，提高攻擊速度的極速暗殺，具有致命傷害的強力投擲，還有提升機動性的...#b#q4101004##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為刺客嗎？那樣的話，必須通過一個簡單的測試……不是什麼複雜的測試。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放弃任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到盜賊試驗場去。");
            break;
        case 4:
            if (qm.getMap(910370000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1422).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910370000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910370000), qm.getMap(910370000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(103000003));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "盜賊試驗場目前擁擠，請稍後再試"));
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
            qm.sendYesNo("很能幹嘛，讓你成為刺客，好像不錯。那麼……我将帮你指引上刺客之路，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1422).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(410);
            qm.removeAll(4031013);
            qm.sendNext("從現在開始你就是刺客了，刺客是躲藏在陰影之中，刹那間將暗器插入敵人心臟的人，希望你能更加努力修煉。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是决不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變强更加困難。");
            break;
        case 3:
            qm.dispose();
    }
}
