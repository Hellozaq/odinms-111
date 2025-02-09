/*
     名字：潘喜的測試4
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
            qm.sendYesNo("結束了最後的修練之後，看看你這段時間變得多強，就來進行最後測試吧。你剛來這裡的時候還是不敢狩獵的怪物，但是什麼時間變這麼強的呢。最後測試的怪物是#r#o9100018##k，你準備好消滅60隻嗎？~喵~");
            break;
        case 1:
            if (qm.getMap(910100140).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910100140).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100140), qm.getMap(910100140).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101030000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "潘喜的測試空間4目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
