/*
     名字：馬提呢
     地图：天空之城
     描述：200000000
 */

function start() {
    var chat = "嘿，旅行者！我是#p" + cm.getNpc() + "#，我們正在舉辦新的競賽活動，你有興趣來看看嗎？#b";
    chat += "\r\n#L0#拯救佳佳";
    chat += "\r\n#L1#連續的老闆大戰";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            cm.getPlayer().saveLocation("EVENT");
            cm.getPlayer().changeMap(cm.getMap(922240200), cm.getMap(922240200).getPortal(0));
            break;
        case 1:
            cm.getPlayer().saveLocation("BOSSPQ");
            cm.getPlayer().changeMap(cm.getMap(970030000), cm.getMap(970030000).getPortal(0));
    }
    cm.dispose();
}
