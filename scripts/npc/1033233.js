/*
     名字：小可愛
     地图：人偶師房間
     描述：931040000
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於怪物的阻擋，無法靠近孩子。");
        cm.dispose();
        return;
    }
    cm.sendNext("#b(有個昏倒的孩子……快點帶出去讓醫生看看吧。)");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.getPlayer().changeMap(cm.getMap(310000000), cm.getMap(310000000).getPortal(0));
        Packages.server.quest.MapleQuest.getInstance(24096).forceStart(cm.getPlayer(), 0, 1);
    }
    cm.dispose();
}
