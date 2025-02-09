/*
     名字：雷德拓
     地图：前往埃德爾斯坦站台
     描述：104020130
 */

function start() {
    buff = cm.getPlayer().getBuffSource(Packages.client.MapleBuffStat.WDEF);
    cm.sendSimple("您好，有什麼可以為您服務嗎？" + (buff == 80001027 || buff == 80001028 ? "\r\n#L0##b我想乘坐自己的飛行器出行#l" : "") + "\r\n#L1##b前往埃德爾斯坦(800楓幣)#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection < 1) {
            cm.getPlayer().changeMap(cm.getMap(200110070), cm.getMap(200110070).getPortal(0));
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getMeso() > 800) {
            cm.getPlayer().changeMap(cm.getMap(200090700), cm.getMap(200090700).getPortal(0));
            cm.getPlayer().startMapTimeLimitTask(120, cm.getMap(310000010));
            cm.gainMeso(-800);
            cm.dispose();
            return;
        }
        cm.sendOk("很抱歉，你好像沒有足夠楓幣支付出行費。");
    }
    cm.dispose();
}
