/*
     名字：升降梯電腦
     地图：外星基地電梯
     描述：610040300
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4033192)) {
        cm.sendOk("缺少#b#v4033192##z4033192##k，無法啟動。");
        cm.dispose();
        return;
    }
    cm.gainItem(4033192, -1);
    cm.getPlayer().changeMap(cm.getMap(610040800), cm.getMap(610040800).getPortal(0));
    cm.dispose();
}
