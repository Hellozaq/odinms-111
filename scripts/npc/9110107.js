/*
     名字：轎子
     地图：楓葉古城外圍
     描述：800040000
 */

var cost = 10000;

function start() {
    if (cm.getPlayer().getMap().getId() == 800000000)
        cm.sendYesNo("这位大人，有没有兴趣去櫻花的忍者城堡~~！一眨眼功夫就到了！费用为#b" + cost + "#k楓幣，不管怎樣，我們走吧！");
    else
        cm.sendYesNo("#h0#大人，這是怎麼一回事，你想回去嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMap().getId() == 800000000 && cm.getPlayer().getMeso() < cost) {
            cm.sendOk("什麼！你沒有足夠的#b" + cost + "#k楓幣，那你還招呼我們幹什麼！");
            cm.dispose();
            return;
        }
        map = cm.getPlayer().getMap().getId() == 800000000 ? 800040000 : 800000000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.gainMeso(cm.getPlayer().getMap().getId() == 800000000 ? -cost : 0);
    }
    cm.dispose();
}
