/*
     名字：休彼德蔓
     地图：休彼德蔓的办公室
     描述：980030000
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
            var chat = "#e<組隊任務：怪物擂台赛Ⅱ>#n \n\r\n\r\n－#eParty Members#n：2-3 \r\n－#elevel#n：50 - 200 \r\n－#eSign up for Monster Carnival#n#b";
            for (var i = 0; i < 2; i++)
                if (getCPQField(i + 1) != "") {
                    chat += "\r\n#L" + i + "# " + getCPQField(i + 1) + "#l";
                }
            cm.sendSimple(chat);
            break;
        case 1:
            var mapid = 980030000 + ((selection + 1) * 1000);
            if (cm.getEventManager("cpq2").getInstance("cpq" + mapid) == null) {
                var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: " + (selection < 1 ? 2 : 3) + " \r\nLevel range: 70~200 \r\n\r\n";
                var chenhui = 0;
                var party = cm.getPlayer().getParty().getMembers();
                for (var i = 0; i < party.size(); i++)
                    if (party.get(i).getLevel() < 70 || party.get(i).getLevel() > 200 || party.get(i).getMapid() != 980030000 || party.size() != (selection < 1 ? 2 : 3)) {
                        chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                        chenhui++;
                    }
                if (chenhui != 0) {
                    cm.sendOk(chat);
                    cm.dispose();
                    return;
                }
                cm.getEventManager("cpq2").startInstance("" + mapid, cm.getPlayer());
                cm.dispose();
                return;
            }
            if (cm.getEventManager("cpq2").getInstance("cpq" + mapid).getPlayerCount() != cm.getPlayer().getParty().getMembers().size()) {
                cm.sendOk("很抱歉，請在確定一下，參加怪物擂台赛Ⅱ的雙方必須有相同數量的組員。");
                cm.dispose();
                return;
            }
            var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq" + mapid).getPlayers().get(0).getParty().getLeader().getName());
            owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
            cm.openNpc(owner.getClient(), 2042006);
            cm.sendOk("申請函已經成功發送。");
            cm.dispose();
    }
}

function getCPQField(fieldnumber) {
    var status = "";
    if (cm.getEventManager("cpq2") != null) {
        var event = cm.getEventManager("cpq2").getInstance("cpq" + (980030000 + (fieldnumber * 1000)));
        if (event == null) {
            status = "Carnival Field " + fieldnumber + "" + (fieldnumber < 2 ? "(2v2)" : "(3v3)") + "";
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
