/*
     名字：勇者亞邁斯
     地图：挑戰入口
     描述：670010100
 */

function start() {
    var chat = "#e<組隊任務:亞邁斯挑戰>#n \r\n\r\n我是亞邁斯，著名的亞邁斯挑戰賽的主持人。這個挑戰賽包括許多團隊難題，合作是解決問題的關鍵。與其他玩家合作，嘗試進入獎勵階段，在該活動中，可以在挑戰結束時獲得許多好處。如果一對夫婦組成的小組，那麼她們可以在額外獎金階段獲得更好的獎勵。\n\r\n\r 2 Party Members, all level#r 40 and level 200#b";
    chat += "\r\n#L0#進入任務地圖";
    chat += "\r\n#L1#離開這裡";
    cm.sendSimple(chat);
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("如果妳想執行這項任務，請告訴妳的組長與我談話。");
                cm.dispose();
                return;
            }
            var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 40~200 \r\n\r\n";
            var chenhui = 0;
            var party = cm.getPlayer().getParty().getMembers();
            for (var i = 0; i < party.size(); i++)
                if (party.get(i).getLevel() < 40 || party.get(i).getLevel() > 200 || party.get(i).getMapid() != 670010100 || party.size() < 1) {
                    chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                    chenhui++;
                }
            if (chenhui != 0) {
                cm.sendOk(chat);
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Amoria");
            var prop = em.getProperty("state");
            if (prop == null || prop == 0) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
                cm.dispose();
                return;
            }
            cm.sendOk("亞邁斯挑戰任務正在執行中，請嘗試其它頻道。");
            break;
        case 1:
            cm.getPlayer().changeMap(cm.getMap(670010000), cm.getMap(670010000).getPortal(0));
    }
    cm.dispose();
}
