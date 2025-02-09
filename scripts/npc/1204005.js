/*
     名字：特魯
     地图：危險的資料商店
     描述：910400000
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於傀儡師的阻擋，無法解救特魯。");
        cm.dispose();
        return;
    }
    cm.sendNext("啊……那些傢伙全部消滅了？哈哈……真不愧是英雄大人！呃，先整理整理再說。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        Packages.server.quest.MapleQuest.getInstance(21762).forceStart(cm.getPlayer(), 0, 2);
        cm.getPlayer().changeMap(cm.getMap(104000004), cm.getMap(104000004).getPortal(0));
    }
    cm.dispose();
}
