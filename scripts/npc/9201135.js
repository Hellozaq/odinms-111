/* Mia Warp
So people aren't stuck in Nath.
 */

var status = -1;
var maps = Array(550000000, 551000000);
var names = Array("#b吉隆大都市(10,000 金币)#k", "#b甘榜村 (50,000 金币)#k");
var cost = Array(10000, 50000);
var selectedMap = -1;
var mapId = 0;

function start() {
    status++;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    //cm.debug('mode: ' + mode + " type: " + type + " selection: " + selection + " status: " + status);
    mapId = cm.getPlayer().getMapId();
    if (mode == 0) {
        cm.sendNext("这个小镇也有很多值得一看的地方。如果您想去其他地方，请告诉我。");
        cm.dispose();
        return;
    }
    if ((mapId == maps[0] || mapId == maps[1]) && status < 3) {

        status = 3;
        cm.sendYesNo("你想回到中心商务区吗？");

        return;
    }
    if (type == 0) {
        cm.sendSimple("你喜欢去哪里旅行？#l\r\n#L1#" + names[0] + "\r\n#L2#" + names[1] + "#k#l");
        return;
    }
    if (selection == 1 && status < 3) {
        status = 0;
        cm.sendYesNo("你想去#b吉隆大都市#k旅行吗? 需要花费#r10,000金币#k。你现在想去\r\n那里吗？");
        return;
    }
    if (selection == 2 && status < 3) {
        status = 1;
        cm.sendYesNo("你想去#b甘榜村#k旅行吗? 需要花费#r50,000金币#k。你现在想去那里\r\n吗？");
        return;
    }
    if (status == 0) {
        if (cm.getPlayer().getMeso() < cost[0]) {
            cm.sendNext("You don't have enought mesos...");
        } else {
            cm.warp(maps[0]);
            cm.getPlayer().gainMeso(-cost[0], true);
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMeso() < cost[1]) {
            cm.sendNext("You don't have enought mesos...");
        } else {
            cm.warp(maps[1]);
            cm.getPlayer().gainMeso(-cost[1], true);
            cm.dispose();
            return;

        }
    } else if (status == 3) {
        cm.warp(540000000);
        cm.dispose();
        return;
    }

}
