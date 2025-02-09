/*
     名字：莎蘿
     地图：新加坡機場
     描述：540010000
 */

var ticket = 4031732;
var cost = 20000;

function start() {
    var chat = "您好，我是新加坡航空的莎蘿，請問有什麼可以幫助您的。#b";
    chat += "\r\n#L0#購買前往墮落城市的機票";
    chat += "\r\n#L1#進入候機室";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().getMeso() < cost) {
                cm.sendOk("很抱歉，請確定一下您有#b" + cost + "#k楓幣嗎？");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
                cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "其它道具視窗的欄位不足"));
                cm.dispose();
                return;
            }
            cm.gainMeso(-cost);
            cm.gainItem(ticket, 1);
            cm.sendOk("謝謝您對新加坡航空的支持。");
            break;
        case 1:
            em = cm.getEventManager("AirPlane");

            if (!cm.getPlayer().itemQuantity(ticket)) {
                cm.sendOk("沒有攜帶#v" + ticket + "#，我不能讓你進入候機室。");
                cm.dispose();
                return;
            }
            if (em.getProperty("entry") == "false" && em.getProperty("docked") == "true") {
                cm.sendOk("尊貴的顧客，請注意航班的時間，檢票在起飛前一分鐘停止收票。");
                cm.dispose();
                return;
            }
            if (em.getProperty("entry") == "false") {
                cm.sendOk("很抱歉，登機門在起飛前一分鐘關閉了。");
                cm.dispose();
                return;
            }
            cm.gainItem(ticket, -1);
            cm.getPlayer().changeMap(cm.getMap(540010001), cm.getMap(540010001).getPortal(0));
    }
    cm.dispose();
}
