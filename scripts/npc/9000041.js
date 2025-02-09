/*
     名字：繳納箱
     地图：維多利亞港
     描述：104000000
 */

var reward = [1302020, 1382009, 1462014, 1472030, 1482020, 1492020, 1302030, 1332025, 1382012, 1412011, 1422014, 1432012, 1442024, 1452022, 1462019, 1472032, 1482021, 1492021, 1302064, 1312032, 1322054, 1332055, 1332056, 1372034, 1382039, 1402039, 1412027, 1422029, 1432040, 1442051, 1452045, 1462040, 1472055, 1482022, 1492022, 1092045, 1092046, 1092047, 4005000, 4005001, 4005002, 4005003, 1002419, 4005004, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 2002023, 2022121, 2022195, 2022439, 2022440, 2022441, 2022308, 2022307, 2002028, 2002029, 2022306, 2022305];

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
            if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getStatus() == 1)
                cm.sendSimple("上面用很小的字寫著，請支付用於村莊建設的捐獻金！行善的您會獲得好報的。\r\n#L1##b為楓之谷世界捐獻楓幣#l");
            else
                cm.sendSimple("你好，打獵時候有收集到#b#v4001126##z4001126##k嗎？我正在收集它們。\r\n#L0##b捐獻10張楓葉#l");
            break;
        case 1:
            select = selection;
            if (selection == 0) {
                if (cm.getPlayer().itemQuantity(4001126) < 10) {
                    cm.sendOk("#v4001126#数量不足，在楓之谷裡任何怪物都有可能掉落喲。");
                    cm.dispose();
                    return;
                }
                var random = Math.floor(Math.random() * reward.length * 5);
                if (random < reward.length) {
                    if (cm.canHold(reward[random])) {
                        var item = cm.gainItem(reward[random], 1);
                        cm.gainItem(4001126, -10);
                        cm.sendOk("恭喜，這次回贈#v" + reward[random] + "#作為對您的獎勵。");
                        cm.dispose();
                        return;
                    }
                    cm.sendOk("在收到物品之前，請檢查一下背包是否留有空位。");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001126, -10);
                var meso = Math.floor(Math.random() * 20000);
                cm.gainMeso(meso);
                cm.sendOk("很感謝您的支持，請收下" + meso + "楓幣作為鼓勵。");
                cm.dispose();
            }
            if (selection == 1) {
                cm.sendGetNumber("請輸入您想捐獻的金額。", 1, 1, 999999999);
            }
            break;
        case 2:
            cm.gainMeso(-selection);
            cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).setCustomData(parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getCustomData()) + selection);
            cm.sendOk("謝謝你對楓之谷世界的支持。");
            cm.dispose();
    }
}
