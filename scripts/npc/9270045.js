/*
     名字：突擊隊員吉姆
     地图：克雷塞爾遺跡 II
     描述：541020800
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(541020700), cm.getMap(541020700).getPortal(6));
    cm.dispose();
}
