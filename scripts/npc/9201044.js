/*
     名字：勇者亞邁斯
     地图：階段 1 - 魔鏡
     描述：670010200
 */

var mobid = [210100, 1110101, 1140100, 2100100, 2100104, 2230103, 2230200, 3110101, 3210200, 3230200, 4110300, 4230101, 4230111, 4230116, 4230126, 4230502, 4250001, 5100004, 5120003, 5130100, 5300001, 6230200, 6230400, 6400000, 7130001, 7130004, 7130100, 7130501, 7160000, 8140102, 8140600];

function start() {
    var eim = cm.getPlayer().getEventInstance();
    switch (cm.getPlayer().getMap().getId()) {
        case 670010200:
            if (eim.getProperty("stage0") == null) {
                cm.sendOk("你好，歡迎來到亞邁斯挑戰賽的舞臺，在這一階段，請先去找閃光人交談，他將向您傳達任務的進一步細節，當你達成要求後，再返回我這裡接受下一次的考驗。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate1", 2));
                eim.setProperty("stage0", 0);
                cm.dispose();
                return;
            }
            if (eim.getProperty("stage0") == 3) {
                cm.sendOk("通往下一階段的傳送門已經打開，請前往下一階段。");
                cm.dispose();
                return;
            }
            if (eim.getProperty("stage0") == 2) {
                cm.sendOk("哦！很不錯，你們順利的完成了第一階段的任務，通往下一個區域的傳送門已經開啟，祝你好運。");
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate" + val, 2));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                var val = Math.floor(Math.random() * 3);
                eim.setProperty("stage0a", val);
                eim.setProperty("stage0", 3);
                cm.dispose();
                return;
            }
            cm.sendOk("請通過旁邊的傳送門，去找閃光人交談，他將向您傳達任務的進一步細節，當你達成要求後，再返回我這裡接受下一次的考驗。");
            cm.dispose();
            break;
        default:
            if (eim.getProperty("stage1") == null) {
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("歡迎來到亞邁斯挑戰賽階段 2，在這個階段，需要#b2名玩家爬#k在附近的繩索上，以形成不同的組合，由組長與我判斷來解鎖謎題。");
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage1a") == null) {
                    cm.sendOk("歡迎來到亞邁斯挑戰賽階段 2，你會發現一些繩索，其中有#b兩根連接#k著通往下一關的傳送門，你需要做的是讓#r兩名組員#k爬上正確的繩子。當隊員爬好了位置，請隊長與我對話。\r\n\r\n注意，如果爬的太低，將得不到正確答案，如果你們組合正確了，傳送門就會打開。");
                    eim.setProperty("stage1a", 1);
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage1b") == null) {
                    eim.setProperty("stage1b", (Math.random() < 0.3) ? "011" : (Math.random() < 0.5) ? "110" : "101");
                }
                var chenhui = 0;
                for (var i = 0; i < 3; i++)
                    if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
                        chenhui++;
                    }
                if (chenhui != 2) {
                    cm.sendOk("看起来你还没有找到正确的方法，需要讓兩名組員#b爬到繩子#k上面，以形成不同的組合。");
                    cm.dispose();
                    return;
                }
                var x = "";
                for (var i = 0; i < 3; i++)
                    x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
                y = x;
                if (y == eim.getProperty("stage1b")) {
                    cm.sendOk("組合正確，通往下一階段的傳送門已經開啟。");
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "亞邁斯: 組合正確，通往下一階段的傳送門已經開啟"));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    eim.setProperty("stage1", "1");
                    cm.dispose();
                    return;
                }
                for (var i = 0; i < 4; i++)
                    if (Math.random() < 0.2)
                        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mobid[parseInt(Math.random() * mobid.length)]), new java.awt.Point(-295 + (Math.random() * 500), -840));

                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
            }
            cm.sendOk("通往下一階段的傳送門已經開啟，聽說後面的階段會更難哦。");
            cm.dispose();
            break;
        case 670010400:
            if (eim.getProperty("stage2") == null) { //判斷條件
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("歡迎來到階段 3 - 瘋狂轉接開關，在這個階段，需要#b2名組員#k分別站在這些標有數位的平臺上面，以形成正確的組合。");
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage2a") == null) {
                    cm.sendOk("歡迎來到階段 3 - 瘋狂轉接開關，在這個階段，需要#b2名組員#k分別站在這些標有數位的平臺上面，以形成正確的組合來解鎖下一階段。");
                    eim.setProperty("stage2a", 0);
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage2b") == null) {
                    var toPick = 2;
                    var positions = Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
                    while (toPick > 0) {
                        rndPicked = Math.floor(Math.random() * positions.length);
                        if (positions[rndPicked] == 0) {
                            positions[rndPicked] = 1;
                            toPick--;
                        }
                    }
                    var returnString = "";
                    for (var i = 0; i < positions.length; i++) {
                        returnString += positions[i];
                        if (i != positions.length - 1)
                            returnString += "";
                    }
                    eim.setProperty("stage2b", returnString);
                }
                var chenhui = 0;
                for (var i = 0; i < 9; i++)
                    if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
                        chenhui++;
                    }
                if (chenhui != 2) {
                    cm.sendOk("看起来你还没有找到正确的方法，需要2名組員分別站在這些標有數位的方塊上面，以形成正確的組合。");
                    cm.dispose();
                    return;
                }
                var x = "";
                for (var i = 0; i < 9; i++)
                    x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
                y = x;
                if (y == eim.getProperty("stage2b")) {
                    cm.sendOk("組合正確，通往下一階段的傳送門已經開啟。");
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "亞邁斯: 組合正確，通往下一階段的傳送門已經開啟"));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    eim.setProperty("stage2", 1); //給予條件
                    cm.dispose();
                    return;
                }
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));

                for (var i = 0; i < 4; i++)
                    if (Math.random() < 0.2)
                        cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mobid[parseInt(Math.random() * mobid.length)]), new java.awt.Point(1400 + (Math.random() * 500), 300));

                cm.dispose();
                return;
            }
            cm.sendOk("通往下一階段的傳送門已經開啟。");
            cm.dispose();
    }
}
