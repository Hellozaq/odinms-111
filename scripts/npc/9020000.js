/*
     名字：拉克裏斯
     地图：第一次同行〈等待室〉
     描述：910340700
 */

function start() {
    if (cm.getPlayer().getMap().getId() == 103000000)
        cm.sendSimple("旅行者！你有聽說過<第一次同行>的組隊任務活動嗎？這是一個需要面對很多謎題與困難的任務，你可以邀請你的朋友陪同你一起參加。\r\n#L0##b進入#m910340700##l");
    else
        cm.sendSimple("#e<組隊任務：第一次同行>#n\r\n\r\n有沒有勇敢的冒險家想要參與本次活動的，與你的朋友一起同心協力完成所有課題，最終打倒超級綠水靈，可以獲取豐厚的獎勵哦！如果你想要挑戰的話，請讓組長和我對話。\r\n\r\n Number of players: 2~6 \r\n Level range: 20~69 \r\n Time limit: 20minutes\r\n#L0##b進入任務地圖#l");
}

function action(mode, type, selection) {
    if (mode > 0) {
        if (cm.getPlayer().getMap().getId() == 103000000) {
            cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
            cm.getPlayer().changeMap(cm.getMap(910340700), cm.getMap(910340700).getPortal(1));
            cm.dispose();
            return;
        }
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
        var chat = "很抱歉，因為你的小組規模不在入場要求範圍大小內，一些組員沒有資格嘗試此任務，或者他們不在此地圖中。\r\n\r\nNumber of players: 2~6 \r\nLevel range: 20~69 \r\n\r\n";
        var chenhui = 0;
        var party = cm.getPlayer().getParty().getMembers();
        for (var i = 0; i < party.size(); i++)
            if (party.get(i).getLevel() < 20 || party.get(i).getLevel() > 69 || party.get(i).getMapid() != 910340700 || party.size() < 2) {
                chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
                chenhui++;
            }
        if (chenhui != 0) {
            cm.sendOk(chat);
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("KerningPQ");
        var prop = em.getProperty("state");
        if (prop == null || prop == 0) {
            em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
            cm.dispose();
            return;
        }
        cm.sendOk("第一次同行任務正在執行中，請嘗試其他頻道。");
    }
    cm.dispose();
}
