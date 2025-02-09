/*
     名字：鈴木
     地图：基地內部(最終之地)
     描述：801040101
 */

function start() {
    cm.sendNext("黑道長老被打敗了，這是多麼快樂的一天啊！你可以沿著這條路回鎮上，祝你好運！");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(801000000), cm.getMap(801000000).getPortal(0));
    cm.dispose();
}
