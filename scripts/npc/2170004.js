/*
     名字：戴摩斯
     地图：克里塞路口
     描述：200100000
 */

function start() {
    cm.sendYesNo("你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("你就不能多在這裡陪我一下。");
            break;
        case 1:
            cm.getPlayer().changeMap(cm.getMap(200000200), cm.getMap(200000200).getPortal(0));
    }
    cm.dispose();
}
