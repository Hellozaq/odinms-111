/*
     名字：小武郎
     地图：昭和整形外科
     描述：801000002
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
            var chat = "歡迎光臨昭和整形外科，我是小武郎，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L1##v5152057##t5152057#";
            cm.sendSimple(chat);
            break;
        case 1:
            if (cm.getPlayer().getGender() < 1)
                face = [20004, 20007, 20011, 20013, 20024, 20027, 20036, 20040, 20044, 20046, 20047, 20052];
            else
                face = [21003, 21014, 21016, 21021, 21023, 21026, 21033, 21035, 21042, 21045, 21048, 21054];

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
