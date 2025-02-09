/*
     名字：蘭斯
     地图：新叶城 购物中心
     描述：600000001
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
            var chat = "歡迎光臨新叶城购物中心，我是蘭斯，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L1##v5152057##t5152057#";
            cm.sendSimple(chat);
            break;
        case 1:
            if (cm.getPlayer().getGender() < 1)
                face = [20050, 20052, 20053, 20055, 20056, 20057];
            else
                face = [21052, 21053, 21054, 21055, 21058, 21062];

            cm.sendStyle("使用專用的機器，可以提前看到整容後的自己，選一個你喜歡的模样。", face);
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(5152057)) {
                cm.gainItem(5152057, -1);
                cm.setFace(face[selection]);
                cm.sendOk("您的新面容已經改进好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
