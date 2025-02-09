/*
     名字：[十字獵人]業務報告
     地图：神木村
     描述：240000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("時空門肯定和黑魔法師有關係。他通過操縱時空門吸取怪物們的氣息！但是為什麼要這樣呢？難道是為了混亂楓之谷的世界嗎？不管怎樣，趕緊把這一情況報告給凱雷特吧。我還要再調查幾個地方，所以你先回#b#m310000000##k報告吧。");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1637).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendNext("在神木村發現了什麼嗎？還是繼續先找個安靜的地方在說。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 164200 exp");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1637).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(931050500), qm.getMap(931050500).getPortal(0));
            qm.gainExp(164200);
            qm.dispose();
    }
}
