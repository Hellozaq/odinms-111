/*
     名字：簡的弟弟
     地图：危險的第一座塔樓
     描述：921140100
 */

function start() {
    if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() > 0) {
        cm.sendOk("由於怪物的阻擋，無法解救簡的弟弟。");
        cm.dispose();
        return;
    }
    cm.removeAll(4032858);
    cm.gainItem(4032831, 1);
    cm.getPlayer().changeMap(cm.getMap(211060200), cm.getMap(211060200).getPortal(3));
    cm.dispose();
}
