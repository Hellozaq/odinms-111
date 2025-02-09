/*
     名字：新葉城計程車
     地图：新葉城-市區中心
     描述：600000000
 */

function start() {
    cm.sendYesNo("您好，新葉城計程車提供直達" + (cm.getPlayer().getMap().getId() == 600000000 ? "鬧鬼宅邸外部" : "新葉城-市區中心") + "客運服務，費用為#b10000#k楓幣。");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMeso() < 10000) {
            cm.sendOk("很抱歉，請確定一下您有#b10000#k楓幣嗎？");
            cm.dispose();
            return;
        }
        map = cm.getPlayer().getMap().getId() == 600000000 ? 682000000 : 600000000;
        cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
        cm.gainMeso(-10000);
    }
    cm.dispose();
}
