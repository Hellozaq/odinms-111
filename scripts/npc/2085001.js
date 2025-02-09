/*
     名字：神木村
     地图：天渡
     描述：240080000
 */

function start() {
    cm.sendSimple("#e<組隊任務：禦龍魔>#n \r\n\r\n你想解開禦龍魔的真實身份嗎，如果你有興趣的話，請找幾個可靠的朋友一起來解開這個秘密。\r\n\r\n Number of players: 2~6 \r\n Level range: 120+ \r\n Skill: 飛翔技能 \r\n Time limit: 20minutes\r\n\r\n#L0##b進入任務地圖#l");
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
        var chat = "很抱歉，因為你的小组规模不在入场要求範圍大小內，一些组員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 120+ \r\n\r\n";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 120 || party.get(i).getMapid() != 240080000 || party.size() < 2) {
                chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("Dragonica");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("禦龍魔任務正在執行中，請嘗試其它頻道。");
    }
    cm.dispose();
}
