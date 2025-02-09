/*
      名字：楓之谷GM
 地圖：
      描述：
*/

var maps = [910001000, 100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000000, 120030000, 130000000, 140000000, 101050000, 106020000, 200000000, 211000000, 211060000, 220000000, 221000000, 222000000, 230000000, 240000000, 250000000, 251000000, 260000000, 261000000, 270000100, 271000000, 300000000, 310000000, 540000000, 541000000, 541020000, 550000000, 551000000, 600000000, 801000000];

var 藍點 = "#fUI/StatusBar.img/base/iconBlue#";
var 紅點 = "#fUI/StatusBar.img/base/iconRed#";
var 三葉草 = "#fEffect/ItemEff.img/1112800/0/0#";

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
            var chat = "你好，我可以提供一些简单服务，请选择：#b";
            chat += "\r\n#L0#地图传送";
            chat += "\r\n#L1#刷道具";
            chat += "\r\n#L2#爆率查询";
            chat += "\r\n#L3#自由传送";
            if (cm.checkSerPicOF()) {
                chat += "\r\n#L4##rPIC开关#k";
            }
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection == 0) {
                var chat = "你想传送到哪里？\r\n#b";
                for (var i = 0; i < maps.length; i++) {
                    chat += "#L" + i + "#" + (i % 2 == 0 ? 藍點 : 紅點) + "#m" + maps[i] + "##l\r\n";
                }
                cm.sendSimple(chat);
            }
            if (selection == 1) {
                cm.sendGetNumber("你好，我是#b#p" + cm.getNpc() + "##k，请问需要提供什么物品帮助吗？\r\n\r\n#e#d请输入物品ID代码", 0, 1000000, 9999999);
            }
            if (selection == 2) {
                if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {
                    cm.sendOk("很抱歉，当前地图沒有刷新怪物，无法查看爆率。");
                    cm.dispose();
                    return;
                }
                var selStr = "请选择你要查看怪物的爆率。\r\n\r\n#b";
                var iz = cm.getMap().getAllUniqueMonsters().iterator();
                while (iz.hasNext()) {
                    var zz = iz.next();
                    selStr += "#L" + zz + "##o" + zz + "##l\r\n";
                }
                cm.sendSimple(selStr);
            }
            if (selection == 3) {
                var prompt = "你好，我是世界传送NPC，輸入目标地图ID。#b";
                cm.sendGetNumber(prompt, 1, 1, 999990000)
            }
            if (selection == 4) {
                var zt;
                var cfg = cm.查询开关(cm.getPlayer().getAccountID(), 0);

                if (cfg == 0) {
                    zt = "当前二级密码状态：#r开启#k。";
                    cm.设置开关(cm.getPlayer().getAccountID(), 0, 1);//第一个参数是帐号id  cm.getPlayerId()这个参数你找找你的
                } else {
                    zt = "当前二级密码状态：#r关闭#k。";
                    cm.设置开关(cm.getPlayer().getAccountID(), 0, 0);
                }

                cm.sendOk(zt);
                cm.dispose();
            }
            select = selection;
            break;
        case 2:
            if (select == 0) {
                cm.warp(maps[selection]);
                cm.dispose();
            }
            if (select == 1) {
                itemid = selection;
                cm.sendGetNumber("#v" + itemid + ":##t" + itemid + "#\r\n\r\n请输入你想要获取物品的数量单位。", 1, 1, 1000);
                break;
            }
            if (select == 2) {
                cm.sendNext(cm.checkDrop(selection));
                cm.dispose();
            }
            if (select == 3) {
                cm.warp(selection);
                cm.dispose();
            }
            break;
        case 3:
            if (select == 1) {
                qty = selection;
                cm.gainItem(itemid, qty);
            }
            cm.dispose();
    }
}