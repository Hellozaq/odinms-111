/*
     名字：龍
     地图：夢現的森林
     描述：900010200
 */

function start() {
    cm.sendAcceptDecline("終於找到了，符合契約人條件的人…");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("執行契約吧……");
            break;
        case 1:
            cm.getPlayer().changeMap(cm.getMap(900090101), cm.getMap(900090101).getPortal(0));
    }
    cm.dispose();
}
