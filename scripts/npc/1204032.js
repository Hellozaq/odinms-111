/*
     名字：赫利娜
     地图：面臨危險的弓箭手教育園
     描述：910050000
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於傀儡師的阻檔，無法解救赫利娜。");
        cm.dispose();
        return;
    }
    cm.sendNext("狂狼勇士…有找回信了嗎？啊…幸好，你果然很強……");
}

function action(mode, type, selection) {
    if (mode > 0) {
        Packages.server.quest.MapleQuest.getInstance(21765).forceStart(cm.getPlayer(), 0, 2);
        cm.getPlayer().changeMap(cm.getMap(100000201), cm.getMap(100000201).getPortal(1));
    }
    cm.dispose();
}
