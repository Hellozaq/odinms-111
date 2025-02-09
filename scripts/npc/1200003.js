/*
 * @NPC - Puro
 * @description Enter ship from Rien to Lith Harbor.
 * @id - 1200003
 */
var duration = 80;

function start() {
    cm.sendYesNo("你要出发去明珠港吗？到那儿需要1分钟左右的时间。");
}

function action(mode) {
    if (mode == 0) {
        cm.sendNext("你现在还不打算出发吗？那等你改变主意后，随时找我吧。\r\n");
    } else if (mode == 1) {
        if (cm.getPlayer().getMeso() < 800) {
            cm.sendNext("嗯......#b800金币#k，请再确认一下是否有钱。没钱可没法送你去。");
        } else {
            for (var i = 0; i < 10; i++) {
                if (cm.getPlayerCount(200090070 + i) == 0) {
                    cm.gainMeso(-800);
                    var duration = 60;
                    cm.getPlayer().setTravelTime(duration);
                    cm.warp(200090070 + i, 0);
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