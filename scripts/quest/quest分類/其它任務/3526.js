/*
     名字：找回遺失的記憶
     地图：墮落城市酒吧
     描述：103000003
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
            qm.sendNext("輕盈的步伐，極少的動靜，幾乎感覺不到你的存在……好久不見了#h0#。");
            break;
        case 1:
            qm.sendNextPrev("沒想到你成長得這麼快，我已經不是你的對手了。以前只不過是一個連隱藏自己都不會的初心者……現在卻成為了出色的盜賊，我為你感到驕傲。");
            break;
        case 2:
            qm.sendNextPrev("請你繼續加油！作為把你帶上盜賊之路的人，我確信，你一定可以變成更強大的盜賊……");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(3526).forceStart(qm.getPlayer(), qm.getNpc(), null);
            Packages.server.quest.MapleQuest.getInstance(7081).forceStart(qm.getPlayer(), qm.getNpc(), 1);
            qm.dispose();
    }
}
