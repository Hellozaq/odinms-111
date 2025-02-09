/*
     名字：巨人
     地图：礦山入口
     描述：310040200
 */

function start() {
    if (!cm.getPlayer().hasEquipped(1003134)) {
        cm.sendOk("喂！！站住！！礦山只有黑色翅膀的干部可以進入。");
        cm.dispose();
        return;
    }
    cm.getPlayer().changeMap(cm.getMap(310050000), cm.getMap(310050000).getPortal(1));
    cm.dispose();
}
