/*
     名字：新紮
     地图：墮落城市機場
     描述：540010100
 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (mode) {
        case -1:
            cm.dispose();
            return;
        case 0:
            if (status < 2) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            var chat = "尊貴的顧客，歡迎乘坐開往新加坡的飛機，我是本次旅途的機長新紮，請問有什麼能為您服務的？#b";
            chat += "\r\n#L0#詢問啟航時間";
            chat += "\r\n#L1#我想要離開這裡";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection < 1) {
                cm.sendOk("請耐心等待，我們馬上就要準備啟航，祝您本次旅途愉快。");
                cm.dispose();
            }
            if (selection > 0) {
                cm.sendYesNo("您隨時都可以離開這裡，不過想要再進來需要重新買票，您還想離開嗎？");
            }
            break;
        case 2:
            cm.getPlayer().changeMap(cm.getMap(103000000), cm.getMap(103000000).getPortal(0));
            cm.dispose();
    }
}
