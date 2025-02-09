/*
     名字：努裡斯
     地图：復活迴廊
     描述：990001100
 */

var item = [1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001029, 4001030, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037];

function start() {
    if (cm.getPlayer().hasEquipped(1032033)) {
        cm.sendOk("為了保護城堡的秘密，在離開這裡之前，請先取下佩戴好的#b#z1032033##k。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("看來你的公會任務已經結束，你準備好離開#b#m" + cm.getPlayer().getMap().getId() + "##k了嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        for (var i = 0; i < item.length; i++)
            cm.removeAll(item[i]);
        cm.getPlayer().changeMap(cm.getMap(102040200), cm.getMap(102040200).getPortal(0));
    }
    cm.dispose();
}
