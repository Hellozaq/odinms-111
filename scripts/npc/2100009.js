/*
     名字：亞丁
     地图：納希綠洲城
     描述：260000000
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
            var chat = "歡迎光臨納希綠洲城，我是亞丁，只需要持有本店的會員卡，我會隨機為你做個改變！#b";
            chat += "\r\n#L1##v5152056##t5152056#";
            cm.sendSimple(chat);
            break;
        case 1:
            cm.sendYesNo("你想使用#v5152056#嗎？你的原貌可能會變成一個隨機的新形象。");
            break;
        case 2:
            if (cm.getPlayer().getGender() < 1)
                face = [20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049];
            else
                face = [21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049];

            if (cm.getPlayer().itemQuantity(5152056)) {
                cm.gainItem(5152056, -1);
                cm.setFace(face[Math.floor(Math.random() * face.length)]);
                cm.sendOk("您的新面容已經改进好了，满意嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
