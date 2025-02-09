/*
     名字：羅貝特四世
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
        case 0:
            if (status == 0) {
                cm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    if (cm.getPlayer().getMap().getId() != 680000210) {
        cm.sendOk("如果你想有一個婚禮，請與我說話的幫手。");
        cm.dispose();
        return;
    }
    if (status == 0)
        cm.sendYesNo("你想要結婚了？");
    if (status == 1) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (data.equals("1")) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendOk("一些錯誤已經發生了：你不是從事與任何人。");
                cm.dispose();
                return;
            }
            var chr = cm.getPlayer().getMap().getCharacterById(cm.getPlayer().getMarriageId());
            if (chr == null) {
                cm.sendOk("確保你的情侶在地圖上。");
                cm.dispose();
                return;
            }
            marr.setCustomData("2_");
            cm.setQuestRecord(chr, 160001, "2_");
            cm.doWeddingEffect(chr);
        } else if (data.equals("2_") || data.equals("2")) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendOk("一些錯誤已經發生了：你不是從事與任何人。");
                cm.dispose();
                return;
            }
            var chr = cm.getPlayer().getMap().getCharacterById(cm.getPlayer().getMarriageId());
            if (chr == null) {
                cm.sendOk("確保你的情侶在地圖上。");
                cm.dispose();
                return;
            }
            cm.setQuestRecord(cm.getPlayer(), 160001, "3");
            cm.setQuestRecord(chr, 160001, "3");
            var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
            if (dat > 10) {
                cm.warpMap(680000300, 0);
            } else {
                cm.setQuestRecord(chr, 160002, "0");
                cm.setQuestRecord(cm.getPlayer(), 160002, "0");
                cm.warpMap(680000300, 0);
            }
        } else {
            cm.sendOk("看到這對新人祝福他們。");
        }
        cm.dispose();
    }
}
