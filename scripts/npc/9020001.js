/*
     名字：克鲁特
     地图：第一次同行&amp;lt;1号门&g
     描述：910340100
 */

var stage1Questions = Array(
    "請聽題：戰士一轉需要的最低等級是多少，請搜集答案數量的通行證給我。",
    "請聽題：戰士一轉需要的最低力量是多少，請搜集答案數量的通行證給我。",
    "請聽題：法師一轉需要的最低智力是多少，請搜集答案數量的通行證給我。",
    "請聽題：弓箭手一轉需要的最低敏捷是多少，請搜集答案數量的通行證給我。",
    "請聽題：盜賊一轉需要的最低敏捷是多少，請搜集答案數量的通行證給我。",
    "請聽題：二轉需要的等級是多少，請搜集答案數量的通行證給我。",
    "請聽題：法師一轉需要的最低等級是多少，請搜集答案數量的通行證給我。");

var stage1Answers = Array(10, 35, 20, 25, 25, 30, 8);

function start() {
    var eim = cm.getPlayer().getEventInstance();
    switch (cm.getPlayer().getMap().getId()) {
        case 910340100:
            if (eim.getProperty("stage1") == null) {
                if (cm.getPlayer().getParty().getLeader().getId() == cm.getPlayer().getId()) {
                    var numpasses = eim.getPlayerCount() - 1; // minus leader
                    var stage2 = cm.getPlayer().getParty().getMembers().size() - 1; //需要繳納的通行證數量
                    if (cm.getPlayer().itemQuantity(4001008) == numpasses) {
                        cm.sendNext("你收集了" + numpasses + "通行證，恭喜你們通過了這一關。通往下一區域的傳送門已經打開，到達那裡有時間限制，所以請快點。");
                        eim.setProperty("stage1", 1);
                        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                        cm.removeAll(4001008);
                        cm.dispose();
                        return;
                    }
                    cm.sendNext("歡迎來到第一次同行<1號關隘>，在這個階段，組長需要從組員那裡集齊" + numpasses + "張通行證交給我，才能進入下一區域，請讓每個組員都分別完成我交代的任務，才能獲得通行證。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    var data = eim.getProperty(cm.getPlayer().getName()); //加入隊員名稱判斷

                    if (data == 0) {
                        cm.sendNext("謝謝你給我帶來的通行證，請把這個#v4001008#交給你的組長。");
                        cm.dispose();
                        return;
                    }
                    if (data == null) {
                        data = Math.floor(Math.random() * stage1Questions.length) + 1; //data will be counted from 1
                        eim.setProperty(cm.getPlayer().getName(), data); //給與隊員問題判斷
                        var question = stage1Questions[data - 1];
                        cm.sendNext("歡迎來到第一次同行<1號關隘>，在這個階段，你必須狩獵附近怪物，獲取我所提問的正確答案相應數量的通行證交給我。\r\n\r\n" + question);
                        cm.dispose();
                        return;
                    }
                    var answer = stage1Answers[data - 1];

                    if (cm.getPlayer().itemQuantity(4001007) == answer) {
                        cm.sendNext("答案是對的，囙此，你剛剛收到了一張通行證，請把這個#v4001008#交給你的組長。");
                        cm.gainItem(4001007, -answer);
                        cm.gainItem(4001008, 1);
                        eim.setProperty(cm.getPlayer().getName(), 0); //給與隊員答題判斷
                        cm.dispose();
                        return;
                    }
                    var question = stage1Questions[eim.getProperty(cm.getPlayer().getName()) - 1]; //問題識別判斷
                    cm.sendNext("很抱歉，你所帶來的通行證數量與問題正確答案不一致，目前持有：#b#c4001007##k張通行證\r\n" + question);
                    cm.dispose();
                    return;
                }
            }
            cm.sendOk("通往下一區域的入口，已经開啟。");
            cm.dispose();
            break;
        case 910340200:
            if (eim.getProperty("stage2") == null) {
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("歡迎來到第一次同行<2號關隘>，請根據組長的指示進行這一關挑戰。");
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage2a") == null) {
                    cm.sendOk("歡迎來到第一次同行<2號關隘>，你會發現一些繩索，其中有兩根連接著通往下一關的傳送門，你們需要做的是讓兩名組員#b爬上正確的繩子#k。當隊員爬好了位置，請隊長與我對話。\r\n\r\n注意，如果爬的太低，將得不到正確答案，如果你們組合正確了，傳送門就會打開。");
                    eim.setProperty("stage2a", 1);
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage2b") == null) {
                    eim.setProperty("stage2b", (Math.random() < 0.3) ? "0101" : (Math.random() < 0.5) ? "0011" : "1001");
                }
                var chenhui = 0;
                for (var i = 0; i < 4; i++)
                    if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
                        chenhui++;
                    }
                if (chenhui != 2) {
                    cm.sendOk("看起来你还没有找到正确的方法，需要讓兩名組員#b爬到繩子#k上面，以形成不同的組合。");
                    cm.dispose();
                    return;
                }
                var x = "";
                for (var i = 0; i < 4; i++)
                    x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
                y = x;
                if (y == eim.getProperty("stage2b")) {
                    eim.setProperty("stage2", 1);
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    cm.sendOk("組合正確，通往下一區域的入口，已经開啟。");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
                cm.sendNext("組合是錯誤的，看來你還沒有找到正確的2跟繩子，請再繼續調整一下位置。");
                cm.dispose();
                return;
            }
            cm.sendOk("通往下一區域的入口，已经開啟。");
            cm.dispose();
            break;
        case 910340300:
            if (eim.getProperty("stage3") == null) {
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("歡迎來到第一次同行<3號關隘>，請根據組長的指示進行這一關挑戰。");
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage3a") == null) {
                    cm.sendOk("歡迎來到第一次同行<3號關隘>，你會發現一些平臺，其中有兩個連接著通往下一關的傳送門，你們需要做的是讓兩名組員#b站到正確的平臺上#k。當站好了位置，請隊長與我對話。\r\n\r\n注意，如果站的太接近邊緣，將得不到正確答案，如果你們組合正確了，傳送門就會打開。");
                    eim.setProperty("stage3a", 1);
                    cm.dispose();
                    return;
                }
                if (eim.getProperty("stage3b") == null) {
                    eim.setProperty("stage3b", (Math.random() < 0.3) ? "00101" : (Math.random() < 0.5) ? "00011" : "10001");
                }
                var chenhui = 0;
                for (var i = 0; i < 5; i++)
                    if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
                        chenhui++;
                    }
                if (chenhui != 2) {
                    cm.sendOk("看起来你还没有找到正确的方法，需要讓兩名組員#b站到平臺#k上面，以形成不同的組合。");
                    cm.dispose();
                    return;
                }
                var x = "";
                for (var i = 0; i < 5; i++)
                    x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
                y = x;
                if (y == eim.getProperty("stage3b")) {
                    eim.setProperty("stage3", 1);
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    cm.sendOk("組合正確，通往下一區域的入口，已经開啟。");
                    cm.dispose();
                    return;
                }
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/wrong_kor", 3));
                cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Failed", 4));
                cm.sendNext("組合是錯誤的，看來你還沒有找到正確的2個平臺，請再繼續調整一下位置。");
                cm.dispose();
                return;
            }
            cm.sendOk("通往下一區域的入口，已经開啟。");
            cm.dispose();
            break;
        case 910340400:
            if (eim.getProperty("stage4") == null) {
                if (cm.getPlayer().itemQuantity(4001008) > 18) {
                    cm.sendOk("大家表現得非常好，通往下一區域的入口，已经開啟。");
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("gate", 2));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    eim.setProperty("stage4", 1);
                    cm.gainItem(4001008, -19);
                    cm.dispose();
                    return;
                }
                cm.sendOk("你好，歡迎進入第一次同行<4號關隘>，繞著地圖走一圈，你就能找到一些怪物，擊敗所有怪物，收集好全部的通行證後，統一交給我。");
                cm.dispose();
                return;
            }
            cm.sendOk("通往下一區域的入口，已经開啟。");
            cm.dispose();
            break;
        case 910340500:
            if (eim.getProperty("stage5") == null) {
                if (cm.getMap(910340500).getAllMonstersThreadsafe().size() < 1) {
                    cm.sendNext("恭喜你們完成了所有挑戰，請等待傳送到最終的獎勵關卡，裡面的怪物比普通的更容易打敗，你會有一段時間盡可能多的狩獵，也可以與NPC對話提前結束。");
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.MaplePacketCreator.serverNotice(6, "恭喜你們完成了所有挑戰，請等待傳送到最終的獎勵關卡，裡面的怪物比普通的更容易打敗，你會有一段時間盡可能多的狩獵，也可以與NPC對話提前結束"));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("quest/party/clear", 3));
                    cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.EtcPacket.environmentChange("Party1/Clear", 4));
                    cm.getEventInstance().startEventTimer(1 * 10000);
                    eim.setProperty("stage5", 1);
                    cm.dispose();
                    return;
                }
                cm.sendOk("你好，歡迎來到第一次同行<最后的關隘>，也是最後一階段。 請消滅地圖中的#b綠水靈王#k，就可以進入獎勵階段了哦。");
                cm.dispose();
                return;
            }
            cm.sendOk("請耐心等待，倒數計時後將進入最終的獎勵關卡。");
            cm.dispose();
    }
}
