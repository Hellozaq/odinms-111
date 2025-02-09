var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000, 953000000, 953010000, 953020000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000);
var minLevel = Array(20, 45, 50, 55, 60, 70, 75, 85, 95, 100, 110, 120, 125, 130, 140, 150, 165);
var maxLevel = Array(30, 55, 60, 65, 70, 80, 85, 95, 105, 110, 120, 130, 135, 140, 150, 165, 200);

function start() {
    var chat = "你想进入哪个地方？#b";
    var in00 = cm.getPlayer().getPosition().x < 405 ? 0 : cm.getPlayer().getPosition().x < 585 ? 5 : 11;
    var in01 = cm.getPlayer().getPosition().x < 405 ? 5 : cm.getPlayer().getPosition().x < 585 ? 11 : 17;
    for (var i = in00; i < in01; i++) {
        chat += "\r\n#L" + i + "##m" + maps[i] + "# (Lv." + minLevel[i] + " ~ " + maxLevel[i] + ")#l";
    }
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过队长进入。");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
            cm.sendOk("如果你想执行这个任务，请让你的队长与我对话。");
            cm.dispose();
            return;
        }
        var chat = "没有与组队长同一地图的组队成员。";

        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < minLevel[selection] || party.get(i).getLevel() > maxLevel[selection] || party.get(i).getMapid() != 951000000 || party.size() < 1) {
                chat += "";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }

        var ticket = selection < 5 ? 4001514 : selection < 11 ? 4001516 : 4001522;
        if (!cm.havePartyItems(ticket, 1)) {
            cm.sendOk("很抱歉，有组队员沒有携带#b#t" + ticket + "##k。\r\n\r\n#r" + cm.NotPartyitem(ticket, 1) + " \r\n#k");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("MonsterPark");
        if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
            cm.sendOk("此区域的任务正在进行中，请稍后再尝试。");
            cm.dispose();
            return;
        }
        cm.givePartyItems(ticket, -1);
        em.startInstance_Party("" + maps[selection], cm.getPlayer());
    }
    cm.dispose();
}
