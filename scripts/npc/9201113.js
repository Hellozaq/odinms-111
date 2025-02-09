/*
     名字：傑克
     地图：內部密室的大廳
     描述：610030020
 */

function start() {
    cm.sendSimple("#e<探險：守護者城堡>#n\r\n\r\n守護者城堡的扭曲之主，目前掌控著守護者之山的所有區域，為了擴張領地，已經計畫對新葉城實施大規模進攻，這可能會在未來幾天發生。你能幫我去尋找一些關於進入堡壘的資訊嗎？\r\n\r\n 5 Party Members, all level#r 120+ \r\n#L0##b進入任務地圖#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
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
        var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 5+ \r\nLevel range: 120+ \r\n\r\n";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 120 || party.get(i).getMapid() != 610030020 || party.size() < 2) {
                chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("CWKPQ");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("守護者城堡任務正在執行中，請嘗試其它頻道。");
    }
    cm.dispose();
}
