/*
     名字：升降機操作台
     地图：機器人研究所3
     描述：310060120
 */

function start() {
    cm.sendYesNo("確定要使用升降臺，移動到#b#m310030200##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().changeMap(cm.getMap(310030211), cm.getMap(310030211).getPortal(0));
        cm.getPlayer().startMapTimeLimitTask(60, cm.getMap(310030200));
    }
    cm.dispose();
}
