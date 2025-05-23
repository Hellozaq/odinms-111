/*
     名字：塞尼
     地图：機器人美麗的經紀人
     描述：100000104
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
            var chat = "歡迎光臨機器人美麗的經紀人，我是塞尼，只需要持有本店的會員卡，就可以享受我們專業的服務。#b";
            chat += "\r\n#L0##v5150053##t5150053#";
            chat += "\r\n#L1##v5151036##t5151036#";
            chat += "\r\n#L2##v5152057##t5152057#";
            chat += "\r\n#L3##v5152103#日拋隱形眼鏡";
            cm.sendSimple(chat);
            break;
        case 1:
            if (cm.getPlayer().getAndroid() == null) {
                cm.sendOk("很抱歉，你必須佩戴機器人才能使用此項服務哦！");
                cm.dispose();
                return;
            }
            if (selection == 0) {
                if (cm.getPlayer().hasEquipped(1662000) || cm.getPlayer().hasEquipped(1662002))
                    hair = [30000, 30020, 30030, 30040, 30050, 30060, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 30990];
                else
                    hair = [31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31360, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990];

                for (var i = 0; i < hair.length; i++)
                    hair[i] = hair[i] + parseInt(cm.getPlayer().getAndroid().getHair() % 10); //讀取當前發色

                cm.sendAndroidStyle("使用專用的機器，可以提前看到美髮後的機器人，選一個你喜歡的樣式。", hair);
            }
            if (selection == 1) {
                color = parseInt(cm.getPlayer().getAndroid().getHair() / 10) * 10;
                hair = [];

                for (var i = 0; i < 8; i++)
                    hair[i] = color + i;

                cm.sendAndroidStyle("使用專用的機器，可以提前看到染髮後的機器人，選一個你喜歡的顏色。", hair);
            }
            if (selection == 2) {
                if (cm.getPlayer().hasEquipped(1662000) || cm.getPlayer().hasEquipped(1662002))
                    face = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20052, 20053, 20055, 20056, 20057];
                else
                    face = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21052, 21053, 21054, 21055, 21058, 21062];

                cm.sendAndroidStyle("使用專用的機器，可以提前看到整容後的機器人，選一個你喜歡的模样。", face);
            }
            if (selection == 3) {
                var teye = cm.getPlayer().getAndroid().getFace() % 100;
                color = [];

                teye += cm.getPlayer().getGender() == 0 ? 20000 : 21000;
                for (var i = 0; i < 8; i++)

                    color[i] = teye + i * 100;

                cm.sendAndroidStyle("使用專用的機器，可以提前看到美瞳後的機器人，選一個你喜歡的鏡片。", color);
            }
            select = selection;
            break;
        case 2:
            if (select == 0 && cm.getPlayer().itemQuantity(5150053) || select == 1 && cm.getPlayer().itemQuantity(5151036)) {
                cm.gainItem(select == 0 ? 5150053 : 5151036, -1);
                cm.setAndroidHair(hair[selection]);
                cm.sendOk("機器人已經改进好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            if (select == 2 && cm.getPlayer().itemQuantity(5152057)) {
                cm.gainItem(5152057, -1);
                cm.setAndroidFace(face[selection]);
                cm.sendOk("機器人已經改进好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            if (select == 3 && cm.getPlayer().itemQuantity(5152100 + selection)) {
                cm.gainItem(5152100 + selection, -1);
                cm.setAndroidFace(color[selection]);
                cm.sendOk("機器人已經改进好了，喜歡嗎？");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，沒有我們指定的" + (select == 3 ? "日拋隱形眼鏡颜色" : "會員卡") + "，恐怕我不能為您服務。");
            cm.dispose();
    }
}
