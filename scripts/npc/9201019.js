/*
     名字：莎卡哈
     地图：結婚小鎮
     描述：680000000
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
            var chat = "歡迎光臨結婚小鎮，我是莎卡哈，只需要持有本店的會員卡，我會隨機為你做個改變！#b";
            chat += "\r\n#L1##v5152021##t5152021#";
            cm.sendSimple(chat);
            break;
        case 1:
            cm.sendYesNo("你想使用#v5152021#嗎？你的原貌可能會變成一個隨機的新形象。");
            break;
        case 2:
            if (cm.getPlayer().getGender() < 1)
                face = [20002, 20005, 20007, 20011, 20014, 20027, 20029];
            else
                face = [21001, 21005, 21007, 21017, 21018, 21020, 21022];

            if (cm.getPlayer().itemQuantity(5152021)) {
                cm.gainItem(5152021, -1);
                cm.setFace(face[Math.floor(Math.random() * face.length)]);
                cm.sendOk("您的新面容已經改进好了，满意嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
