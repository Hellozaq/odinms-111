/*
 * @NPC - Puro
 * @description Enter ship from Rien to Lith Harbor.
 * @id - 1200003
 */
var duration = 80;

function start() {
    cm.sendYesNo("要离开金银岛去我们的村子吗？坐船可以送你到#b里恩#k......不过\r\n必须要花#b800#k金币买票才行。去里恩吗？只要1分钟就到了。");
}

function action(mode) {
    if (mode == 0) {
        cm.sendNext("嗯......不想去也没办法。那里对人来而言是荒凉了些，但却是\r\n企鹅的天堂......");
    } else if (mode == 1) {
        if (cm.getPlayer().getMeso() < 800) {
            cm.sendNext("嗯......#b800#k金币你真有吗？请确认一下钱是否足够。不然是无\r\n法坐船的。");
        } else {
            for (var i = 0; i < 10; i++) {
                if (cm.getPlayerCount(200090060 + i) == 0) {
                    cm.gainMeso(-800);
                    var duration = 60;
                    cm.getPlayer().setTravelTime(duration);
                    cm.warp(200090060 + i, 0);
                    cm.sendClock(duration);
                    cm.dispose();
                    return;
                }
            }
            cm.sendNext("看起来所有的船都已经满了，请稍后再试。");
        }
    }
    cm.dispose();
}
