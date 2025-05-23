/*
     名字：重砲兵之路2
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
            qm.sendNext("你想升職為重砲兵嗎？通過之前使用加農砲的經歷，你應該知道砲手是什麼樣的職業，接下來重砲兵的能力會更強哦。");
            break;
        case 1:
            qm.sendNextPrev("重砲兵能使用的技能，包括熟悉武器的精通加農砲，提高攻擊速度的加農砲推進器，具有致命傷害的烈火暴擊，還有提升自身能力的#b#q5300008##k等等。");
            break;
        case 2:
            qm.sendNextPrev("我只是作了簡要的說明，你想成為重砲兵嗎？那樣的話，你必須通過簡單的測試才行。只要進入準備好的試驗場，消滅怪物，收集#b30#k個黑暗之珠就行。");
            break;
        case 3:
            qm.sendAcceptDecline("測試的時候如果藥水用光了，必須放棄任務重新開始。所以一定要做好充分準備之後再進去，測試馬上開始。接受的話，我就把你送到海賊試驗場去。");
            break;
        case 4:
            if (qm.getMap(912040000).getCharacters().size() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1428).forceStart(qm.getPlayer(), qm.getNpc(), null);
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
            qm.sendYesNo("成績不錯，不！應該說是比較優秀，你一定會成為讓斯托納滿意的砲手，那麼……我將幫你升職為重砲兵，準備好了嗎？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1428).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeJob(530);
            qm.removeAll(4031013);
            qm.sendNext("好的，從現在起你就是重砲兵了，重砲兵是使用加農砲在遠處向敵人發動猛烈攻擊的人……為了變得更強，必須努力修煉。如果修煉中遇到什麼困難，我可以幫你。");
            break;
        case 2:
            qm.sendOk("今後的你會獲得比現在更強的力量，但是決不能把那種力量用在弱者身上，把自己的力量用在正確的事情上，遠比變強更加困難。");
            break;
        case 3:
            qm.dispose();
    }
}
