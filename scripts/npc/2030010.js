/*
     名字：阿們
     地图：殘暴炎魔祭壇
     描述：280030000
 */

function start() {
    cm.sendYesNo("確定要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(211042200), cm.getMap(211042200).getPortal(0));
    cm.dispose();
}
