/*
     名字：諾靈頓
     地图：觸礁的鬼盜船
     描述：923020000
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
    switch (cm.getPlayer().getMap().getId()) {
        case 923020000:
            if (status < 1) {
                if (cm.getPlayer().getParty() == null) {
                    cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險。");
                    cm.dispose();
                    return;
                }
                if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("很抱歉，進入此區域，需要由組長帶隊。");
                    cm.dispose();
                    return;
                }
                var chat = "#e<組隊任務：霧海大作戰>#n\r\n\r\n霧海大作戰是一個2v2競技的比賽，在這項賽事中，你需要與你的隊友合作，才能突破幽靈船內的各種障礙。\n\r\n\r\n－#eParty Members#n：2-3\r\n－#elevel#n：90 - 150 \r\n－#eSign up for Dual Raid#n#b";
                for (var i = 0; i < 5; i++)
                    if (getCPQField(i) != "") {
                        chat += "\r\n#L" + i + "# " + getCPQField(i) + "#l";
                    }
                cm.sendSimple(chat);
            }
            if (status > 0) {
                var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: " + (selection < 2 ? 2 : 3) + " \r\nLevel range: 90 - 150 \r\n\r\n";
                var chenhui = 0;
                var party = cm.getPlayer().getParty().getMembers();
                for (var i = 0; i < party.size(); i++)
                    if (party.get(i).getLevel() < 90 || party.get(i).getLevel() > 150 || party.get(i).getMapid() != 923020000 || party.size() != (selection < 2 ? 2 : 3)) {
                        chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                        chenhui++;
                    }
                if (chenhui != 0) {
                    cm.sendOk(chat);
                    cm.dispose();
                    return;
                }
                if (cm.getEventManager("Ghost").getInstance("Ghost" + selection) == null) {
                    cm.getEventManager("Ghost").startInstance("" + selection, cm.getPlayer());
                    cm.dispose();
                    return;
                }
                if (cm.getEventManager("Ghost").getInstance("Ghost" + selection).getPlayerCount() != cm.getPlayer().getParty().getMembers().size()) {
                    cm.sendOk("很抱歉，請在確定一下，參加霧海大作戰的雙方必須有相同數量的組員。");
                    cm.dispose();
                    return;
                }
                var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("Ghost").getInstance("Ghost" + selection).getPlayers().get(0).getParty().getLeader().getName());
                owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                cm.openNpc(owner.getClient(), 2060103);
                cm.sendOk("申請函已經成功發送。");
                cm.dispose();
            }
            break;
        case 923020100:
        case 923020200:
        case 923020300:
        case 923020400:
        case 923020500:
            if (status < 1) {
                request = cm.getNextCarnivalRequest();
                if (request == null) {
                    cm.sendOk("請耐心等待，如果再規定時間內，還沒有合適的對手參與本次競技，等待室將會自動關閉。");
                    cm.dispose();
                    return;
                }
                cm.sendYesNo(request.getChallengeInfo() + "\r\n你想參加到它們的霧海作戰計畫中嗎？");
            }
            if (status > 0) {
                cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
                cm.dispose();
            }
            break;
        default:
            cm.sendOk("歡迎參與霧之海競技專案，作為本次比賽的評判，我會一直留意你的。有一點請記住：尊重比賽的對手，就等於尊重自己，只要有機會，就一定不要放棄。");
            cm.dispose();
    }
}

function getCPQField(fieldnumber) {
    var status = "";
    if (cm.getEventManager("Ghost") != null) {
        var event = cm.getEventManager("Ghost").getInstance("Ghost" + fieldnumber);
        if (event == null && fieldnumber < 3) {
            status = "Carnival Field " + fieldnumber + "(2v2)";
        } else if (event == null) {
            status = "Dual Raid Field " + (fieldnumber + 1) + "(3v3)";
        } else if (event != null && (event.getProperty("started") == null || event.getProperty("started").equals("false"))) {
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
