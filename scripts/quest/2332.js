/*
     名字：菲歐娜在哪？
     地图：結婚禮堂（結婚會場錀匙觸發）
     描述：106021600
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
            qm.sendNextS("這是結婚會場的鑰匙！用這個就能進入菲歐娜公主被關的結婚會場了。", 3);
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2332).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
