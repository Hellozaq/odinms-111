/*
     名字：長相神奇的石像
     地图：傀儡師秘密通路
     描述：910510100
 */

function start() {
    cm.sendYesNo("普蘭西斯主人，您要離開洞穴嗎？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.getPlayer().changeMap(cm.getMap(101040311), cm.getMap(101040311).getPortal(2)); //傀儡師的避難所
    cm.dispose();
}
