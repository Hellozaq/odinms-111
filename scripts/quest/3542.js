/*
     名字：找回失去的回憶
     地图：鯨魚號碼頭
     描述：120000000
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
            qm.sendNext("哦，好久不見……聽說你離開鯨魚號之後，變得更強大了……我就知道你會成為一名優秀的砲手。哈哈哈！");
            break;
        case 1:
            qm.sendNextPrev("回憶？我們的回憶……那一定是我們第一次見面的時候。當時你只是一位膽小的初心者，被巴洛谷嚇哭，還掉進了海裡……不知不覺間變得這麼強大了。");
            break;
        case 2:
            qm.sendNextPrev("（斯托納笑著看著遠方的天空，回憶著……當他回憶起這些往事時，淚水開始湧上眼眶。）");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3542).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
