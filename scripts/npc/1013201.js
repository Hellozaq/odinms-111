/*
     名字：卡蜜拉
     地图：石人寺院的入口
     描述：910600000
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於怪物的阻擋，無法解救卡蜜拉。");
        cm.dispose();
        return;
    }
    cm.sendNext("你……你救了我嗎？謝謝你……我們快回去吧。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        Packages.server.quest.MapleQuest.getInstance(22598).forceStart(cm.getPlayer(), 0, 2);
        cm.removeNpc(cm.getPlayer().getMap().getId(), cm.getNpc());
    }
    cm.dispose();
}
