/*
     名字：波馬克
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
            var chat = "我是波馬克，是一位鏡片美容專家。我相信你的眼睛是你身體中最重要的特徵，請讓我為你開一種合適的化妝鏡片。#b";
            chat += "\r\n#L0##v5152035##t5152035#";
            cm.sendSimple(chat);
            break;
        case 1:
            var teye = cm.getPlayer().getFace() % 100;
            color = [];

            teye += cm.getPlayer().getGender() < 1 ? 20000 : 21000;
            for (var i = 0; i < 8; i++)
                color[i] = teye + i * 100;
            cm.sendYesNo("你想使用#v5152035#嗎？你將隨機獲得一副美瞳鏡片。");
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(5152035)) {
                cm.gainItem(5152035, -1);
                cm.setFace(color[Math.floor(Math.random() * color.length)]);
                cm.sendOk("您的新鏡片已經改進好了，滿意嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
