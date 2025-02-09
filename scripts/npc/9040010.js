/*
     名字：飛虎石像
     地图：惡靈13的王座
     描述：990000900
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4001024)) {
        cm.sendOk("這是你们最後的挑戰，擊敗潜伏在魯賓體內的魯碧安#v4001024#並將其歸還給我。");
        cm.dispose();
        return;
    }
    cm.removeAll(4001024);
    var eim = cm.getPlayer().getEventInstance();
    var prev = eim.setProperty("bossclear", "true", true);
    if (prev == null) {
        var start = parseInt(eim.getProperty("entryTimestamp"));
        var diff = Date.now() - start;

        var points = 1000 - Math.floor(diff / (100 * 60));

        cm.getGuild().gainGP(points < 1000 ? 1000 : points);
    }
    cm.warpParty(990001000, 0); //傳送該地圖所有玩家
    eim.startEventTimer(1 * 60000);
    cm.dispose();
}
