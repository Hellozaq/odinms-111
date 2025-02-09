/*
     名字：J.J.
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
            var chat = "你好，我們擁有你一直渴望的美麗外觀！每個人注意到的你的第一件事就是你的眼睛，我們可以幫助你找到最適合你的化妝鏡！#b";
            chat += "\r\n#L0##v5152036##t5152036#";
            cm.sendSimple(chat);
            break;
        case 1:
            var teye = cm.getPlayer().getFace() % 100;
            color = [];

            teye += cm.getPlayer().getGender() < 1 ? 20000 : 21000;
            for (var i = 0; i < 8; i++)
                color[i] = teye + i * 100;
            cm.sendStyle("使用專用的機器，可以提前看到美瞳後的自己，選一個你喜歡的鏡片。", color);
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(5152036)) {
                cm.gainItem(5152036, -1);
                cm.setFace(color[selection]);
                cm.sendOk("您的新鏡片已經改進好了，滿意嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
