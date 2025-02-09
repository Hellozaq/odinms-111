/*
     名字：佩森
     地图：白色波浪碼頭
     描述：120020400
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 120020400)
        cm.sendSimple("我在這附近工作了很久，這邊的港灣景色可是非常迷人的哦，你想不想要我帶你在附近海域參觀下？\r\n#L0##b海豚岬（800楓幣）#l\r\n#L1#夜晚的海豚島（900楓幣）#l");
    else
        cm.sendSimple("#m" + cm.getPlayer().getMap().getId() + "#怎麼樣？很有趣吧。\r\n#L0##b返回：白色波浪碼頭#l\r\n#L1#觀光：" + (cm.getPlayer().getMap().getId() == 912050000 ? "夜晚的海豚島" : "海豚岬") + "（500楓幣）#l\r\n#L2#繼續觀光#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection < 2) {
            if (cm.getPlayer().getMeso() < (cm.getPlayer().getMap().getId() == 120020400 ? selection < 1 ? 800 : 900 : selection < 1 ? 0 : 500)) {
                cm.sendOk("嗯……服務不是免費的，為了維護當地的生態，希望你能做出一些貢獻。");
                cm.dispose();
                return;
            }
            cm.gainMeso(-(cm.getPlayer().getMap().getId() == 120020400 ? selection < 1 ? 800 : 900 : selection < 1 ? 0 : 500));
            map = selection < 1 ? cm.getPlayer().getMap().getId() == 120020400 ? 912050000 : 120020400 : cm.getPlayer().getMap().getId() == 912050001 ? 912050000 : 912050001;
            cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
            cm.dispose();
            return;
        }
        cm.sendOk("海邊的景色很好，合適放鬆心情，如果你想回去了，在和我談談。");
    }
    cm.dispose();
}
