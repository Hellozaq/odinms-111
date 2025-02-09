/*
     名字：Dr. Bosch
     地图：玩具城整形外科
     描述：220000003
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
            var chat = "你好，我是的一位鏡片美容專家。我相信你的眼睛是你身體中最重要的特徵，請讓我為你開一種合適的化妝鏡片。#b";
            chat += "\r\n#L0##v5152012##t5152012#";
            chat += "\r\n#L1##v5152015##t5152015#";
            cm.sendSimple(chat);
            break;
        case 1:
            var teye = cm.getPlayer().getFace() % 100;
            color = [];

            teye += cm.getPlayer().getGender() < 1 ? 20000 : 21000;
            for (var i = 0; i < 8; i++)
                color[i] = teye + i * 100;
            if (selection < 1) {
                cm.sendYesNo("你想使用#v5152012#嗎？你將隨機獲得一副美瞳鏡片。");
            }
            if (selection > 0) {
                cm.sendStyle("使用專用的機器，可以提前看到美瞳後的自己，選一個你喜歡的鏡片。", color);
            }
            select = selection;
            break;
        case 2:
            if (select < 1 && cm.getPlayer().itemQuantity(5152012) || select > 0 && cm.getPlayer().itemQuantity(5152015)) {
                cm.gainItem(select < 1 ? 5152012 : 5152015, -1);
                cm.setFace(select < 1 ? color[Math.floor(Math.random() * color.length)] : color[selection]);
                cm.sendOk("您的新鏡片已經改進好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
