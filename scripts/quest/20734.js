/*
     名字：終極冒險家
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
            qm.sendNext("目前，楓之谷世界正處于極大的危險之中，我們需要一支更大的軍隊來保護這個地方免受黑魔法師的傷害。為了建立一支更強大的軍隊，我決定與冒險家首領結盟，用彼此共同的力量創造了終極探險家。");
            break;
        case 1:
            qm.sendYesNo("終極探險家出生50等，並賦予了非常特殊的技能，你願意作為終極探險家重生嗎？");
            break;
        case 2:
            if (!qm.getClient().canMakeCharacter(qm.getPlayer().getWorld())) {
                qm.sendOk("在創建終極冒險家之前，請預留一個角色欄位。");
                qm.dispose();
                return;
            }
            qm.sendUltimateExplorer();
            qm.dispose();
    }
}
