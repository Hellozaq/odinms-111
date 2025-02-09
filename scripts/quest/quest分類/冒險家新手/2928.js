/*
     名字：瓦蕾莉的危險忠心2
     地图：鯨魚號碼頭
     描述：120000000
 */

var status = -1;

function start(mode, type, selection) {
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
            qm.sendAcceptDecline("酷水母的身體居然無效。切！不過我不會就此甘休的，還有後續考驗呢。這次就請你把可怕地#r#t4033014##k拿給他看看。");
            break;
        case 1:
            if (qm.getMap(912040400).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(912040400).resetFully();
                qm.getPlayer().changeMap(qm.getMap(912040400), qm.getMap(912040400).getPortal(1));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(120000000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "瓦蕾莉的怪脾氣海岸目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
