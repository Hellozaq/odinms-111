/*
     名字：狂劍士之路
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
            qm.sendNext("你想走狂劍士之路嗎？我來為你簡單地說明一下狂劍士。狂劍士是最一般意義上的劍士，主要使用的武器是#b劍#k和#b斧#k。");
            break;
        case 1:
            qm.sendNextPrev("狂劍士能使用的技能，包括熟悉武器的武器精通，提高攻擊速度的極速武器，增加隊員攻擊傷害的激勵，還有吸收反射敵人傷害的#b#q1101007##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為狂劍士嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到劍士試驗場去。");
            break;
        case 4:
            if (qm.getMap(910230000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1411).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendYesNo("非常好！我知道你一定可以做到，你展現出了一個好狂劍士的資質。現在的你可以成為狂劍士了，最後我再問你一次，你想成為狂劍士嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1411).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(110);
            qm.removeAll(4031013);
            qm.sendNext("好的！從現在起你就是狂劍士了！狂劍士是為了追求力量而不斷戰鬥的人……希望你不要失去鬥志，勇敢前行。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，必須把自己的力量用在正確的事情上，那是你的責任。");
            break;
        case 3:
            qm.dispose();
    }
}
