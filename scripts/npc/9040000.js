/*
     名字：修安
     地图：遺跡發掘隊營區
     描述：102040200
 */

function start() {
    cm.sendSimple("#e<公會任務:遺跡發掘地>#n\r\n\r\nNumber of players: 1~30 \r\n Level range: 1~200 \r\n All members of the same guild \r\nTime limit: 120minutes\r\n\r\n通往遺跡的路在這裡，你想做什麼? \r\n#L0##b把公會登記到公會任務裡#l\r\n#L1#參加公會任務#l\r\n#L2#我想知道細節#l");
}

function action(mode, type, selection) {
    switch (selection) {
        case 0:
            if (cm.getPlayerStat("GID") < 1 || cm.getPlayerStat("GRANK") > 2) {
                cm.sendOk("登記公會任務，需要有公會的公會長在我這裡註冊，才能記錄。");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("GuildQuest");
            var prop = em.getProperty("state");

            if ((prop == null || prop == 0) && em.getInstance("GuildQuest") == null) {
                em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
                cm.guildMessage("公會已經開始公會守護戰 <頻道:" + cm.getClient().getChannel() + "> 請公會成員盡速來到遺跡發掘對營地參加公會守護戰。");
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，已經有一個公會正在實施公會守護戰。");
            cm.dispose();
            break;
        case 1:
            if (cm.getPlayerStat("GID") < 1) {
                cm.sendOk("如果你沒有參加工會，你就不能參與公會任務。");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("GuildQuest");
            var eim = em.getInstance("GuildQuest");
            if (eim == null) {
                cm.sendOk("很抱歉，該頻道目前沒有登記公會任務，再次檢查你的公會是否正在計畫公會任務。");
                cm.dispose();
                return;
            }
            if (em.getProperty("guildid") != null && !em.getProperty("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
                cm.sendOk("你的公會目前沒有在該頻道的登記公會任務。");
                cm.dispose();
                return;
            }
            if (em.getProperty("state") == 0) {
                eim.registerPlayer(cm.getPlayer());
                cm.dispose();
                return;
            }
            cm.sendOk("很抱歉，進入等待區的入口已經關閉，你可以聯繫所屬的工會會長瞭解情況。");
            break;
        case 2:
            var chat = "\r\n\r\n\t隊伍需求:\r\n";
            chat += "\r\n\t- 1名隊員 #b等級低於或等於30級#k";
            chat += "\r\n\t- 1名隊員 #b輕功學滿並且會隱身的盜賊#k";
            chat += "\r\n\t- 1名隊員 #b學滿瞬間移動的法師#k";
            chat += "\r\n\t- 1名隊員 #b遠程攻擊職業,比如弓箭手，刺客或者槍手#k";
            chat += "\r\n\t- 1名隊員 #b擁有很好機動性的職業，比如會二段跳的盜賊";

            cm.sendOk(" # e < 公會任務 : 遺跡發掘地 >  # n \ r \ n \ r \ n與你的公會成員合作，從骷髏手中奪回魯賓，公會任務裡包含了許多謎團和挑戰，以及等待發掘的遺跡墳墓，只有相互協助才能 ?  @ 得最後的豐厚獎勵，並且可為公會累積公會積分。 " + chat);
    }
    cm.dispose();
}
