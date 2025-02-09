/*
     名字：修煉騎士的終結
     地图：耶雷弗
     描述：130000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
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
            qm.sendAcceptDecline("你的等級提升得很快，任務似乎也執行了很多…這樣條件應該達到要求了，要參加騎士等級試煉嗎？現在你也該脫離修煉騎士變成正式騎士了。難道不是嗎？");
            break;
        case 1:
            qm.sendPrev("如果你想參加騎士等級考試，可以隨時來耶雷弗。各個騎士團長會對你的能力進行測試，如果合格，就會任命你為正式騎士。再見……");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20200).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.dispose();
    }
}
