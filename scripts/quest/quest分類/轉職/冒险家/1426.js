/*
     名字：槍手之路
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
            qm.sendNext("你想選擇槍手之路嗎？槍手是以火槍為主要武器的職業，可以在远距离对敌人进行快速且靈敏的襲擊。");
            break;
        case 1:
            qm.sendNextPrev("槍手能使用的技能，包括熟悉武器的精通槍法，提高攻擊速度的迅雷再起，具有致命傷害的會心一擊-改，還有迷惑敵人的#b#q5201004##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為槍手嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到海賊試驗場去。");
            break;
        case 4:
            if (qm.getMap(912040000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1426).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendYesNo("成績不錯，不，應該說是比較優秀，你一定會成為一個好槍手，那麼……我將幫你指引上打手之路，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1426).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(520);
            qm.removeAll(4031013);
            qm.sendNext("從現在起你已經是槍手了，槍手可以用槍給予敵人施加淩厲的攻擊……你若想變得更強，還需要不斷地努力修煉才是，若在修煉的過程中遇到困難的話，我也會幫你的。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變強更加困難。");
            break;
        case 3:
            qm.dispose();
    }
}
