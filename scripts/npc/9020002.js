/*
     名字：娜拉
     地图：第一次同行&amp;lt;1號關隘&gt;
     描述：910340100
 */

var item = [4001007, 4001008];

function start() {
    if (cm.getPlayer().getMap().getId() == 910340000)
        cm.sendYesNo("本次活動已經結束，要離開#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
    else
        cm.sendYesNo("确定要离开#b#m" + cm.getPlayer().getMap().getId() + "##k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        for (var i = 0; i < item.length; i++)
            cm.removeAll(item[i]);
        map = cm.getPlayer().getMap().getId() == 910340000 ? 910340700 : 910340000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
    }
    cm.dispose();
}
