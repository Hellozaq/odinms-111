/*
     名字：潘喜的測試1
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
            if (status > 0) {
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
            qm.sendNext("好的，讓我們進入下一項修煉~喵，剛才的修煉雖然只是熱身運動，但是你的實力應該已經提高了一些~喵。所以需要測定一下實力，不是嗎～喵？");
            break;
        case 1:
            qm.sendYesNo("喵~嗚～喵喵～從現在開始，你要對付的是#r#o9100015##k~喵，和剛才對付的火獨眼獸不可同日而語~喵。我會把你送到怪物所在的地方去，你去消滅30個，然後回來找我~喵，你想挑戰嗎？～喵。");
            break;
        case 2:
            if (qm.getMap(910100110).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910100110).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100110), qm.getMap(910100110).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101030000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "潘喜的測試空間1目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
