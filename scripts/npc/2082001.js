var ticket = 4031045;

function start() {
    b = cm.getPlayer().getBuffSource(Packages.client.MapleBuffStat.WDEF);
    cm.sendSimple("你想乘坐开往天空之城的船吗？到达那里大约需要1分钟。" + (b == 80001027 || b == 80001028 ? "\r\n#L0##b我想乘坐自己的飞行器出行#l" : "") + "\r\n#L1##b我想乘船前往#m200000000##l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection == 0) {
            cm.getPlayer().changeMap(cm.getMap(200110010), cm.getMap(200110010).getPortal(0));
            cm.dispose();
            return;
        }
        if (!cm.getPlayer().itemQuantity(ticket)) {
            cm.sendOk("确保你有一张开往天空之城的的船票，请检查你的背包。");
            cm.dispose();
            return;
        }
        em = cm.getEventManager("Flight");
        if (em.getProperty("entry").equals("false") && em.getProperty("docked").equals("true")) {
            cm.sendOk("船已经在准备出发。对不起，请乘坐下一班船。运行时间表可以通过售票员确认。");
            cm.dispose();
            return;
        }
        if (em.getProperty("entry").equals("false")) {
            cm.sendOk("船还没有到，请稍等片刻。");
            cm.dispose();
            return;
        }
        cm.gainItem(ticket, -1);
        cm.getPlayer().changeMap(cm.getMap(240000111), cm.getMap(240000111).getPortal(0));
    }
    cm.dispose();
}
