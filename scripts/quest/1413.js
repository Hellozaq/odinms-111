/*
     名字：槍騎兵之路
     地图：勇士聖殿
     描述：102000003
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
            qm.sendNext("你想選擇槍騎兵之路嗎？槍騎兵就如同名字一樣，是使用槍或矛等長柄武器的職業，在劍士中攻擊範圍最遠，動作最華麗。");
            break;
        case 1:
            qm.sendNextPrev("槍騎兵能使用的技能，包括熟悉武器的武器精通，提高攻擊速度的極速武器，增加隊員防御的禦魔陣，還有增加隊員最大HP的#b#q1301007##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為槍騎兵嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到劍士試驗場去。");
            break;
        case 4:
            if (qm.getMap(910230000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1413).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(910230000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910230000), qm.getMap(910230000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(102000003));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "劍士試驗場目前擁擠，請稍後再試"));
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
            qm.sendYesNo("在你身上可以看到成為槍騎兵的本質，你一定可以把槍用得比劍更好，你想成為槍騎兵嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1413).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(130);
            qm.removeAll(4031013);
            qm.sendNext("好的，從現在起你就是槍騎兵了！是使用長柄武器不斷騷擾敵人的執著劍士——槍騎兵。希望你能相信自己的能力，繼續前進。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，必須把自己的力量用在正確的事情上，那是你的責任。");
            break;
        case 3:
            qm.dispose();
    }
}
