/*
     名字：打手之路
     地图：航海室
     描述：120000101
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
            qm.sendNext("你想選擇打手之路嗎？那是用拳頭或指節拳甲和敵人戰鬥的勇敢的职业，雖然動作華麗，但操作起來卻很不简单……你對自己有自信嗎？");
            break;
        case 1:
            qm.sendNextPrev("打手能使用的技能，包括熟悉武器的精通指虎，提高攻擊速度的致命快打，造成致命傷害的衝壓暴擊，還有提升体力的#b#q5100009##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為打手嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放弃任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到海賊試驗場去。");
            break;
        case 4:
            if (qm.getMap(912040000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1425).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.getMap(912040000).resetFully();
                qm.getPlayer().changeMap(qm.getMap(912040000), qm.getMap(912040000).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(120000101));
                qm.dispose();
                return;
            }
            qm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "海賊試驗場目前擁擠，請稍後再試"));
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
            qm.sendYesNo("成績不錯，不，應該說是比較優秀，你一定會成為一個好打手，那麼……我将帮你指引上打手之路，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1425).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(510);
            qm.removeAll(4031013);
            qm.sendNext("從現在起你已經是打手了，打手可以赤手空拳地鎮壓敵人，囙此，它要比任何人更加努力修煉才是，若在修煉的過程中遇到困難的話，我也會幫你的。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是决不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變强更加困難。");
            break;
        case 3:
            qm.dispose();
    }
}
