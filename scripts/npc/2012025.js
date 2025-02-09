/*
     名字：杰拉斯
     地图：碼頭&amp;lt;前往納希綠洲城&gt;
     描述：200000151
 */

var ticket = 4031576;

function start() {
    buff = cm.getPlayer().getBuffSource(Packages.client.MapleBuffStat.WDEF);
    cm.sendSimple("您好，有什麼可以為您服務嗎？" + (buff == 80001027 || buff == 80001028 ? "\r\n#L0##b我想乘坐自己的飛行器出行#l" : "") + "\r\n#L1##b我想乘船前往#m260000000##l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (selection == 0) {
            cm.getPlayer().changeMap(cm.getMap(200110031), cm.getMap(200110031).getPortal(0));
            cm.dispose();
            return;
        }
        if (!cm.getPlayer().itemQuantity(ticket)) {
            cm.sendOk("沒有攜帶#v" + ticket + "#，我不能讓你乘船，您可以在售票亭購買！");
            cm.dispose();
            return;
        }
        em = cm.getEventManager("Geenie");
        if (em.getProperty("entry").equals("false") && em.getProperty("docked").equals("true")) {
            cm.sendOk("尊貴的顧客，檢票在起航前一分鐘已经停止收票。");
            cm.dispose();
            return;
        }
        if (em.getProperty("entry").equals("false")) {
            cm.sendOk("很抱歉，本次飛船已經起航，請您耐心等待下一次入港。");
            cm.dispose();
            return;
        }
        cm.gainItem(ticket, -1);
        cm.getPlayer().changeMap(cm.getMap(200000152), cm.getMap(200000152).getPortal(0));
    }
    cm.dispose();
}
