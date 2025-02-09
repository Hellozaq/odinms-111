/*
     名字：鈴木
     地图：基地內部
     描述：801040100
 */

function start() {
    var eim = cm.getPlayer().getEventInstance();
    if (eim.getProperty("shouwaBoss") == null) {
        cm.sendOk("你打算不顧我的安危就這樣逃脫了嗎？現在我們是坐在同一條船上的人，在消滅黑道長老之前，誰都無法從這裡走出去！");
        cm.dispose();
        return;
    }
    cm.sendNext("黑道長老被打敗了，幹得好！我在裡面發現了一臺可疑的機器，我們要把它搬出去。");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(801040101), cm.getMap(801040101).getPortal(0));
    cm.dispose();
}
