/*
     名字：坤
     地图：臨時港口
     描述：914100000
 */

function start() {
    if (cm.getPlayer().getMap().getId() != 914100000) {
        cm.dispose();
        return;
    }
    cm.sendYesNo("嗯……這裡是很危險的海域，但是冒一下險也挺刺激。所以我偶爾會一個人過來冒險。你想回到維多利亞港去嗎？");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("這裡的景色多不錯！哈哈！");
            break;
        case 1:
            cm.getPlayer().changeMap(cm.getMap(200090090), cm.getMap(200090090).getPortal(0));
            cm.getPlayer().startMapTimeLimitTask(30, cm.getMap(104000000));
    }
    cm.dispose();
}
