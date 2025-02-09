/*
     名字：伊培賀
     地图：寂靜的洞穴
     描述：914100023
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("……");
        cm.dispose();
        return;
    }
    cm.sendNext("哎呀……沒想到你的力量這麼強。沒辦法。這次只能先撤了。下次再見面的時候，我們就是敵人了。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().changeMap(cm.getMap(914100021), cm.getMap(914100021).getPortal(1));
        Packages.server.quest.MapleQuest.getInstance(22604).forceStart(cm.getPlayer(), 0, 1);
    }
    cm.dispose();
}
