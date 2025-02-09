/*
     名字：愛奧斯之石IV
     地图：愛奧斯塔1樓
     描述：221020000
 */

function start() {
    if (!cm.getPlayer().itemQuantity(4001020)) {
        cm.sendOk("需要携带#v4001020#才可以启动#p" + cm.getNpc() + "#。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("这是为玩具塔的旅行者而设的魔法石。你想使用#b魔法石觉醒\r\n卷轴#k移动至#m221021700#吗？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.gainItem(4001020, -1);
        cm.getPlayer().changeMap(cm.getMap(221021200), cm.getMap(221021200).getPortal(1));
    }
    cm.dispose();
}
