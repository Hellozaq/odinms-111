/*
     名字：剪票口
     地图：新葉城 地鐵站
     描述：600010001
 */

var ticket = 4031713;

function start() {
    if (!cm.getPlayer().itemQuantity(ticket)) {
        cm.sendOk("沒有攜帶#v" + ticket + "#，我不能讓你乘船，您可以在售票亭購買！");
        cm.dispose();
        return;
    }
    em = cm.getEventManager("Subway");
    if (em.getProperty("entry") == "false" && em.getProperty("docked") == "true") {
        cm.sendOk("尊貴的顧客，檢票在發車前一分鐘已经停止收票。");
        cm.dispose();
        return;
    }
    if (em.getProperty("entry") == "false") {
        cm.sendOk("很抱歉，本次列車已經發車，請您耐心等待下一次入站。");
        cm.dispose();
        return;
    }
    cm.sendYesNo("尊貴的顧客，開往墮落城市的捷運已經抵達，請問您現在要進入#b侯車室#k嗎？");
}

function action(mode, type, selection) {
    if (mode > 0) {
        cm.gainItem(ticket, -1);
        cm.getPlayer().changeMap(cm.getMap(600010002), cm.getMap(600010002).getPortal(0));
    }
    cm.dispose();
}
