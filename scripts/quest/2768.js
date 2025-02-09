/*
     名字：潘喜的測試2
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
            qm.sendYesNo("~喵喵~嗚~喵~你應該知道，現在該是驗收實力的時候了，和上次一樣要送你去獨立的空間了，那裡有#r#o3230100#的強化版#k在等你。去消滅 40隻回來就可以了，準備好了嗎？~喵~喵~");
            break;
        case 1:
            if (qm.getMap(910100120).getCharacters().size() < 1) {
                qm.forceStartQuest();
                qm.getMap(910100120).resetFully();
                qm.getPlayer().changeMap(qm.getMap(910100120), qm.getMap(910100120).getPortal(0));
                qm.getPlayer().startMapTimeLimitTask(600, qm.getMap(101030000));
                qm.dispose();
                return;
            }
            qm.playerMessage(6, "潘喜的測試空間2目前擁擠，請稍後再試。");
            qm.dispose();
    }
}
