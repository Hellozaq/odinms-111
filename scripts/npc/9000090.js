/*
     名字：駱駝計程車
     地图：快速移動
     描述：快速移動
 */

var cost = 1000;

function start() {
    cm.sendYesNo("旅行者，駱駝計程車等待您的光臨，只需要" + cost + "楓幣就可以搭乘你去#b" + (cm.getPlayer().getMap().getId() == 261000000 ? "#m260020000#" : "#m260020700#") + "#k。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMeso() < cost) {
            cm.sendOk("很抱歉，請確定一下您有#b" + cost + "#k楓幣嗎？");
            cm.dispose();
            return;
        }
        map = cm.getPlayer().getMap().getId() == 261000000 ? 260020000 : 260020700;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.gainMeso(-cost);
    }
    cm.dispose();
}
