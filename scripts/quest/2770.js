/*
     名字：潘喜的測試3
     地图：巨大的樹木
     描述：101030000
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
            qm.sendYesNo("~喵喵~嗚~喵~好了，你也知道了，現在我要測試一下你的實力增强了多少，~喵喵~嗚~喵~測試的對象是#r#o9100017##k。必須消滅50個才行，一定要做好充分的準備~~喵。你想現在去對決嗎~喵？");
            break;
        case 1:
            if (qm.getMap(910100130).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910100130).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100130), qm.getMap(910100130).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101030000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "潘喜的測試空間3目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
