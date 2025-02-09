/*
     名字：守護者之石
     地图：賢者噴水池
     描述：990000500
 */

function start() {
    if (cm.getPlayer().getMap().getReactorByName("watergate").getState() > 0) {
        cm.sendOk("通往下一區域的入口，已經開啟。");
        cm.dispose();
        return;
    }
    if (cm.getPlayerStat("GRANK") > 2) {
        cm.sendOk("很抱歉，我只會與參加這次公會任務的負責人談話。");
        cm.dispose();
        return;
    }
    var eim = cm.getPlayer().getEventInstance();
    var currentCombo = eim.getProperty("stage3combo");
    if (currentCombo == null || currentCombo.equals("reset")) {
        var newCombo = makeCombo();
        eim.setProperty("stage3combo", newCombo);
        eim.setProperty("stage3attempt", 1);
        cm.sendOk("歡迎來到賢者噴水池，這裡是保護著通往寶座的祕密通道的地方，請提供給附庸所需要的物品，他會告訴你物品是不是正確定，如果你提供了錯誤的物品，他會很不高興的。你有#b七次機會#k，祝你好運。當你準備好了，請再次與我對話。");
        cm.dispose();
        return;
    }
    var attempt = parseInt(eim.getProperty("stage3attempt"));
    var combo = parseInt(currentCombo);
    var guess = getGroundItems();
    if (guess == null) {
        cm.sendOk("請確保你的所供奉的物品正確的擺放在諸位侯面前，然後再和我談談。");
        cm.dispose();
        return;
    }
    if (combo == guess) {
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
        cm.getGuild().gainGP(500);
        cm.getPlayer().getMap().getReactorByName("watergate").forceHitReactor(1); //開啟指定反應堆
        cm.sendOk("通往下一區域的入口，已經開啟。");
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "通往下一區域的入口，已經開啟"));
        cm.dispose();
        return;
    }
    if (attempt < 7) {
        var comboItems = [0, 0, 0, 0];
        var guessItems = [0, 0, 0, 0];

        var correct = 0,
            incorrect,
            unknown = 0;
        for (var i = 0; i < 4; i++) {
            var guessIdx = Math.floor(guess / Math.pow(10, i)) % 10;
            var comboIdx = Math.floor(combo / Math.pow(10, i)) % 10;

            if (guessIdx != comboIdx) {
                (guessItems[guessIdx])++;
                (comboItems[comboIdx])++;
            } else
                correct++;
        }

        for (var i = 0; i < 4; i++) {
            var diff = guessItems[i] - comboItems[i];
            if (diff > 0)
                unknown += diff;
        }
        incorrect = 4 - correct - unknown;

        var string = "";

        if (correct != 0) {
            string += (correct == 1 ? "一位附庸很喜歡獻給他的貢品。\r\n" : correct + " 位附庸喜歡你們獻給他們的貢品。\r\n");
        }
        if (incorrect != 0) {
            string += (incorrect == 1 ? "一位附庸很不滿意獻給他貢品。\r\n" : incorrect + " 位附庸收到了他們不滿意的物品。\r\n");
        }
        if (unknown != 0) {
            string += (unknown == 1 ? "一位附庸收到了未知的貢品。\r\n" : unknown + " 位附庸收到了未知的供品。\r\n");
        }
        string += "這是你的 ";
        switch (attempt) {
            case 1:
                string += "第一階段";
                break;
            case 2:
                string += "第二階段";
                break;
            case 3:
                string += "第三階段";
                break;
            default:
                string += attempt + "th";
                break;
        }
        string += " 嘗試。";

        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300036), new java.awt.Point(-350 + (Math.random() * 500), 150));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300037), new java.awt.Point(400 + (Math.random() * 500), 150));
        cm.sendOk(string);
        eim.setProperty("stage3attempt", attempt + 1);
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
        cm.dispose();
        return;
    }
    eim.setProperty("stage3combo", "reset");
    cm.sendOk("很抱歉，你的答案讓我很不滿意，請保持鎮靜，稍後再試。");

    for (var i = 0; i < 6; i++) {
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300036), new java.awt.Point(-350 + (Math.random() * 500), 150));
        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300037), new java.awt.Point(-350 + (Math.random() * 500), 150));
    }
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
    cm.dispose();
}

function makeCombo() {
    var combo = 0;

    for (var i = 0; i < 4; i++) {
        combo += (Math.floor(Math.random() * 4) * Math.pow(10, i));
    }
    return combo;
}

function getRawItems() {
    var mapItems = cm.getPlayer().getMap().getItemsInRange(cm.getPlayer().getPosition(), java.lang.Double.POSITIVE_INFINITY);
    var rawItems = new Array();

    var iter = mapItems.iterator();
    while (iter.hasNext()) {
        var item = iter.next();
        var id = item.getItem().getItemId();
        if (id < 4001027 || id > 4001030) {
            continue;
        } else {
            rawItems.push(item);
        }
    }
    return rawItems;
}

//check the items on ground and convert into an applicable string; null if items aren't proper

function getGroundItems() {
    var itemInArea = new Array(-1, -1, -1, -1);

    var rawItems = getRawItems();
    if (rawItems.length != 4)
        return null;
    for (var j = 0; j < rawItems.length; j++) {
        var item = rawItems[j];
        var id = item.getItem().getItemId();

        //check item location
        for (var i = 0; i < 4; i++) {
            if (cm.getPlayer().getMap().getArea(i).contains(item.getPosition())) {
                itemInArea[i] = id - 4001027;
                break;
            }
        }
    }

    //guaranteed four items that are part of the stage 3 item set by this point, check to see if each area has an item
    if (itemInArea[0] == -1 || itemInArea[1] == -1 || itemInArea[2] == -1 || itemInArea[3] == -1)
        return null;

    return ((itemInArea[0] * 1000) + (itemInArea[1] * 100) + (itemInArea[2] * 10) + itemInArea[3]);
}
