/*
     名字：Claudia
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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(8860)).getStatus() > 1 && !cm.getPlayer().itemQuantity(4031528)) {
                cm.sendNext("I've already done your hair once as a trade-for-services, sport. You'll have to snag an EXP Hair coupon from the Cash Shop if you want to change it again!");
                cm.dispose();
                return;
            }
            var chat = "歡迎光臨結婚小鎮，我是Claudia，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L0##v4031528##t4031528#";
            cm.sendSimple(chat);
            break;
        case 1:
            if (cm.getPlayer().getGender() < 1)
                hair = [30270, 30240, 30020, 30000, 30132, 30192, 30032, 30112, 30162];
            else
                hair = [31150, 31250, 31310, 31050, 31050, 31030, 31070, 31091, 31001];

            for (var i = 0; i < hair.length; i++)
                hair[i] = hair[i] + parseInt(cm.getPlayer().getHair() % 10); //讀取當前發色
            cm.sendStyle("使用專用的機器，可以提前看到美髮後的自己，選一個你喜歡的樣式。", hair);
            break;
        case 2:
            if (cm.getPlayer().itemQuantity(4031528)) {
                cm.gainItem(4031528, -1);
                cm.setHair(hair[selection]);
                cm.sendOk("您的新髮型已經燙好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的會員卡，恐怕我不能為您服務。");
            cm.dispose();
    }
}
