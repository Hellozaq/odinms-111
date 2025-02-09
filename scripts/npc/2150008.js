/*
     名字：雷德拓
     地图：埃德爾斯坦臨時機場
     描述：310000010
 */

function start() {
    buff = cm.getPlayer().getBuffSource(Packages.client.MapleBuffStat.WDEF);
    cm.sendSimple("您好，有什麼可以為您服務嗎？" + (buff == 80001027 || buff == 80001028 ? "\r\n#L0##b乘坐飛行器前往維多利亞#l\r\n#L1#乘坐飛行器前往天空之城#l" : "") + "\r\n#L2##b前往維多利亞(800楓幣)#l\r\n#L3#前往天空之城(800楓幣)#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection < 2) {
            map = selection < 1 ? 200110071 : 200110050;
            cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getMeso() > 800) {
            map = selection < 3 ? 200090710 : 200090610;
            cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
            cm.getPlayer().startMapTimeLimitTask(120, cm.getMap(cm.getPlayer().getMap().getId() == 200090710 ? 104020130 : 200000170));
            cm.gainMeso(-800);
            cm.dispose();
            return;
        }
        cm.sendOk("很抱歉，你好像沒有足夠楓幣支付出行費。");
    }
    cm.dispose();
}
