/*
     名字：杰克
     地图：新葉城 購物中心
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
            var chat = "歡迎光臨新葉城購物中心，我是杰克，只需要持有本店的會員卡，我會隨機為你做個改變！#b";
            chat += "\r\n#L1##v5152056##t5152056#";
            cm.sendSimple(chat);
            break;
        case 1:
            cm.sendYesNo("你想使用#v5152056#嗎？你的原貌可能會變成一個隨機的新形象。");
            break;
        case 2:
            if (cm.getPlayer().getGender() < 1)
                face = [20050, 20052, 20053, 20055, 20056, 20057];
            else
                face = [21052, 21053, 21054, 21055, 21058, 21062];

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
