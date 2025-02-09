/*
     名字：克蘿倫斯修女
     地图：結婚小鎮
     描述：680000000
 */

function start() {
    cm.sendYesNo(cm.getPlayer().getMap().getId() == 680000000 ? "你要去結婚禮堂嗎？" : "你要回去結婚小鎮嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        map = cm.getPlayer().getMap().getId() == 680000000 ? 680000200 : 680000000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
