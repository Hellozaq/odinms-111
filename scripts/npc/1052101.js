/*
     名字：安德里亞
     地图：墮落城市美髮店
     描述：103000005
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
            var chat = "歡迎光臨墮落城市美髮店，我是安德里亞，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L0##v5150052##t5150052#";
            chat += "\r\n#L1##v5151035##t5151035#";
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection < 1) {
                if (cm.getPlayer().getGender() < 1)
                    hair = [30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190];
                else
                    hair = [31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190];

                for (var i = 0; i < hair.length; i++)
                    hair[i] = hair[i] + parseInt(cm.getPlayer().getHair() % 10); //讀取當前發色
                cm.sendYesNo("你想使用#v5150052#嗎？你的原貌可能會變成一個隨機的新形象。");
            }
            if (selection > 0) {
                var color = parseInt(cm.getPlayer().getHair() / 10) * 10;
                hair = [];

                for (var i = 0; i < 8; i++)
                    hair[i] = color + i;
                cm.sendYesNo("你想使用#v5151035#嗎？你的原貌可能會變成一個隨機的新形象。");
            }
            select = selection;
            break;
        case 2:
            if (select < 1 && cm.getPlayer().itemQuantity(5150052) || select > 0 && cm.getPlayer().itemQuantity(5151035)) {
                cm.gainItem(select < 1 ? 5150052 : 5151035, -1);
                cm.setHair(hair[Math.floor(Math.random() * hair.length)]);
                cm.sendOk("您的新髮型已經燙好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
