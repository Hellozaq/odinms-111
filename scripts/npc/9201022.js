/*
     名字：湯瑪斯
     地图：弓箭手村
     描述：100000000
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 100000000)
        cm.sendYesNo("你想参观一下西洋風格的結婚殿堂吗？");
    else
        cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = cm.getPlayer().getMap().getId() != 680000000 ? 680000000 : 100000000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(5));
        //if (cm.getPlayer().getMap().getId() > 680000400) cm.setQuestRecord(cm.getPlayer(), 160002, 0);
    }
    cm.dispose();
}
