/*
     名字：馬西姆斯
     地图：弓箭手村
     描述：100000000
 */

function start() {
    cm.sendYesNo("戰鬥廣場歡迎英雄的加入，我非常期待你的到來！");
}

function action(mode, type, selection) {
    switch (mode) {
        case 0:
            cm.sendOk("可惜了，我還以為你充滿了才能。");
            break;
        case 1:
            cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("BATTLESQUARE"));
            cm.getPlayer().changeMap(cm.getMap(960000000), cm.getMap(960000000).getPortal(0));
    }
    cm.dispose();
}
