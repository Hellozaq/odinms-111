/*
     名字：計程車
     地图：埃德爾斯坦
     描述：310000000
 */

var cost = 1000;

function start() {
    cm.sendSimple("這是只在埃德爾斯坦運營的埃德爾斯坦專用計程車。它能將黑色翅膀的各位安全快速地送到目的地。認識黑色翅膀的人…？呃，如果你給我楓幣，我也能送你一程。你想去哪裡呢？\r\n#L0##b雷本礦山#k(1000)楓幣#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMeso() < cost) {
            cm.sendOk("很抱歉，請確定一下你有#b" + cost + "#k楓幣嗎？");
            cm.dispose();
            return;
        }
        cm.getPlayer().changeMap(cm.getMap(310040200), cm.getMap(310040200).getPortal(3));
        cm.gainMeso(-cost);
    }
    cm.dispose();
}
