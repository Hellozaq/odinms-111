/*
     名字：席摩士
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
            var chat = "歡迎光臨結婚小鎮，我是席摩士，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L0##v5150019##t5150019#";
            chat += "\r\n#L1##v5151016##t5151016#";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection < 1) {
                if (cm.getPlayer().getGender() < 1)
                    hair = [30000, 30020, 30110, 30130, 30160, 30190, 30240, 30270, 30430];
                else
                    hair = [31000, 31030, 31050, 31070, 31090, 31150, 31310, 31910, 34010];

                for (var i = 0; i < hair.length; i++)
                    hair[i] = hair[i] + parseInt(cm.getPlayer().getHair() % 10); //讀取當前發色
                cm.sendYesNo("你想使用#v5150019#嗎？你的原貌可能會變成一個隨機的新形象。");
            }
            if (selection > 0) {
                var color = parseInt(cm.getPlayer().getHair() / 10) * 10;
                hair = [];

                for (var i = 0; i < 8; i++)
                    hair[i] = color + i;
                cm.sendYesNo("你想使用#v5151016#嗎？你的原貌可能會變成一個隨機的新形象。");
            }
            select = selection;
            break;
        case 2:
            if (select < 1 && cm.getPlayer().itemQuantity(5150019) || select > 0 && cm.getPlayer().itemQuantity(5151016)) {
                cm.gainItem(select < 1 ? 5150019 : 5151016, -1);
                cm.setHair(hair[Math.floor(Math.random() * hair.length)]);
                cm.sendOk("您的新髮型已經燙好了，满意嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
