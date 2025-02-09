/*
     名字：坎特
     地图：野豬飼育室
     描述：923010000
 */

function start() {
    if (cm.getPlayer().itemQuantity(4031508) < 5 || cm.getPlayer().itemQuantity(4031507) < 5)
        cm.sendYesNo("是否放棄任務，離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
    else
        cm.sendYesNo("你成功收集了5個研究報告和費洛蒙，現在我送你回公園，到那裡再找我。");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(923010100), cm.getMap(923010100).getPortal(0));
    cm.dispose();
}
