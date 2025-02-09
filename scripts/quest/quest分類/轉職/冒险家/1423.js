/*
     名字：俠盜之路
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
            qm.sendNext("你想選擇俠盜之路嗎？俠客是主要使用短劍的盗贼。是在近距離快速攻擊敵人，搶走敵人身上的東西的職業。");
            break;
        case 1:
            qm.sendNextPrev("俠盜能使用的技能，包括....熟悉武器的精準之刀，提高攻擊速度的速度激發，具有连续傷害的迴旋斬，還有偷窃敌人道具的#b#q4201004##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為俠盜嗎？那樣的話，必須通過一個簡單的測試……不是什麼複雜的測試。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放弃任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到盜賊試驗場去。");
            break;
        case 4:
            if (qm.getMap(910370000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1423).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendYesNo("很能幹嘛，讓你成為俠盜，好像不錯。那麼……我将帮你指引上俠盜之路，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1423).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(420);
            qm.removeAll(4031013);
            qm.sendNext("好的，從現在開始你就是俠盜，俠盜是以快速行動和技巧壓制敵人的人，希望你能更加努力修煉。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是决不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變强更加困難。");
            break;
        case 3:
            qm.dispose();
    }
}
