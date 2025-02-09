/*
     名字：休彼德蔓
     地图：玩具城
     描述：220000000
 */

var Text = [["什麼是怪物擂臺賽？哈哈哈！這也許是一次你永遠不會忘記的經歷，這是一場可以與其它旅行者競技的比賽。", "我知道如果你們用真武器來互相打鬥實在是太危險了，我不會建議這樣的野蠻行為。所以這是一個能讓大家可以享受戰鬥激情與快樂的場所。你怎麼認為，是不是興奮起來了？"],
    ["首先，你可以選擇參加那種怪物擂臺賽，當進入我的辦公室後，組長可以開一間房間等待對手，也可以進入別人的房間，但是必須注意自己隊伍的人數，組隊入場模式是雙方人數必須一致：2V2，3V3。", "開始怪物擂臺賽後，每一隊的玩家要拼命打怪，以得到更多的組隊CP，消耗組隊CP可以放召喚獸，召喚物，技能，來阻止對方打怪獲取CP，消耗了CP你不用擔心你隊伍的CP會比對方少，因為總數不會消耗，只會消耗你隊伍的可用CP。", "比賽過程玩家不能攻擊到對方玩家和我方怪物（敵方和敵方要攻擊的怪物是透明的），怪物會掉落一些藥水補充能量，一旦撿起立即自動補給，不能儲存，帶出遊戲地圖，而玩家的消耗欄裡面自帶的藥水也是禁止使用。", "規定的比賽時間結束後，怪物消失，道具消失，CP多的一方贏，參與比賽的雙方都會有不同的獎勵，按照比賽的成績來計算。"]];

var select = -1;

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
            if (cm.getPlayer().getMap().getId() == 980000000) {
                if (cm.getPlayer().getParty() == null) {
                    cm.sendOk("很抱歉，怪物擂臺賽Ⅱ是一個團隊專案，不能然你單獨參加。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("很抱歉，如果你想參加怪物擂臺賽Ⅱ，需要由組長帶隊。");
                    cm.dispose();
                    return;
                }
                var chat = "#e<組隊任務：怪物擂台赛>#n \n\r\n\r\n－#eParty Members#n：2-3 \r\n－#elevel#n：30 - 200 \r\n－#eSign up for Monster Carnival#n#b";
                for (var i = 0; i < 5; i++)
                    if (getCPQField(i + 1) != "") {
                        chat += "\r\n#L" + i + "# " + getCPQField(i + 1) + "#l";
                    }
            }
            if (cm.getPlayer().getMap().getId() == 200000000 || cm.getPlayer().getMap().getId() == 220000000) {
                var chat = "#e<怪物擂臺賽>#n\r\n\r\n歡迎來到怪物擂臺賽的舞臺，如果你還沒有參加過怪物擂臺賽，最好聽我說一下規則。#b";
                chat += "\r\n#L5#參加怪物擂臺賽Ⅰ";
                chat += "\r\n#L6#參加怪物擂臺賽Ⅱ";
                chat += "\r\n#L7#怪物擂臺賽的規則";
                chat += "\r\n#L8##z4001254#兌換物品";
            }
            cm.sendSimple(chat);
            break;
        case 1:
            if (selection < 5) {
                var mapid = 980000000 + ((selection + 1) * 100);
                if (cm.getEventManager("cpq").getInstance("cpq" + mapid) == null) {
                    var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: " + (selection < 2 ? 2 : 3) + " \r\nLevel range: 30~200 \r\n\r\n";
                    var chenhui = 0;
                    var party = cm.getPlayer().getParty().getMembers();
                    for (var i = 0; i < party.size(); i++)
                        if (party.get(i).getLevel() < 30 || party.get(i).getLevel() > 200 || party.get(i).getMapid() != 980000000 || party.size() != (selection < 3 ? 2 : 3)) {
                            chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                            chenhui++;
                        }
                    if (chenhui != 0) {
                        cm.sendOk(chat);
                        cm.dispose();
                        return;
                    }
                    cm.getEventManager("cpq").startInstance("" + mapid, cm.getPlayer());
                    cm.dispose();
                    return;
                }
                var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq" + mapid).getPlayers().get(0).getParty().getLeader().getName());
                owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                cm.openNpc(owner.getClient(), 2042001);
                cm.sendOk("申請函已經成功發送。");
                cm.dispose();
            }
            if (selection == 5) {
                if (cm.getPlayer().getLevel() > 30 && cm.getPlayer().getLevel() < 200) {
                    cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
                    cm.getPlayer().changeMap(cm.getMap(980000000), cm.getMap(980000000).getPortal(4));
                    if (!cm.getPlayer().getMap().containsNPC(2042000)) {
                        cm.getPlayer().getMap().spawnNpc(2042000, new java.awt.Point(276, -1));
                    }
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getLevel() < 30) {
                    cm.sendOk("你必須至少達到30級才能參加怪物擂臺賽，當你足夠強壯的時候跟我說話。");
                    cm.dispose();
                    return;
                }
                cm.sendOk("對不起，只有30~200級的玩家才能參加怪物擂臺賽。");
                cm.dispose();
                return;
            }
            if (selection == 6) {
                if (cm.getPlayer().getLevel() > 70 && cm.getPlayer().getLevel() < 200) {
                    cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
                    cm.getPlayer().changeMap(cm.getMap(980030000), cm.getMap(980030000).getPortal(4));
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getLevel() < 70) {
                    cm.sendOk("你必須至少達到70級才能參加怪物擂臺賽Ⅱ，當你足夠強壯的時候跟我說話。");
                    cm.dispose();
                    return;
                }
                cm.sendOk("對不起，只有70~200級的玩家才能參加怪物擂臺賽Ⅱ。");
                cm.dispose();
                return;
            }
            if (selection == 7) {
                var chat = "#e<怪物擂臺賽>#n\r\n\r\n如果你對怪物擂臺賽有什麼疑問，可以儘管提出來。#b";
                chat += "\r\n#L0#什麼是怪物擂臺賽";
                chat += "\r\n#L1#有關怪物擂臺賽的詳細資訊";
                cm.sendSimple(chat);
            }
            if (selection == 8) {
                var chat = "#e<怪物擂臺賽>#n\r\n\r\n如果你有#z4001254#，可以用它來交換道具。";
                chat += "\r\n#L2##b#v1122162##z1122162##k(100個#z4001254#)";
                chat += "\r\n#L3##b#v1102327##z1102327##k(150個#z4001254#)";
                cm.sendSimple(chat);
            }
            break;
        case 2:
            if (selection < 2) {
                if (select < 0)
                    select = selection;
                cm.sendNext(Text[select][status - 2]);
            }
            if (selection > 1) {
                if (cm.getPlayer().itemQuantity(4001254) < (selection < 3 ? 100 : 150)) {
                    cm.sendOk("請再檢查一下，兌換" + (selection < 3 ? "#v1122162#需要100個#t4001254#。" : "#v1102327#需要150個#t4001254#。") + "");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
                    cm.getClient().sendPacket(Packages.tools.packet.MaplePacketCreator.serverNotice(1, "裝備道具視窗的欄位不足"));
                    cm.dispose();
                    return;
                }
                cm.gainItem(selection < 3 ? 1122162 : 1102327, 1);
                cm.gainItem(4001254, -(selection < 3 ? 100 : 150));
                cm.sendOk("請拿好你的物品，感謝你一直以來對怪物擂臺賽的支持。");
                cm.dispose();
            }
            break;
        default:
            Text[select][status - 2] == undefined ? cm.dispose() : cm.sendNextPrev(Text[select][status - 2]);
            break;
        case 5:
            Text[select][status - 2] == undefined ? cm.dispose() : cm.sendPrev(Text[select][status - 2]);
    }
}

function getCPQField(fieldnumber) {
    var status = "";
    if (cm.getEventManager("cpq") != null) {
        var event = cm.getEventManager("cpq").getInstance("cpq" + (980001000 + (fieldnumber * 100)));
        if (event == null) {
            status = "Carnival Field " + fieldnumber + "" + (fieldnumber < 4 ? "(2v2)" : "(3v3)") + "";
        }
        if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName() + "/" + event.getPlayerCount() + "users/Avg. Level " + averagelevel;
        }
    }
    return status;
}
