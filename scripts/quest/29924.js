/*
     名字：甦醒的狂狼勇士
     地图：瑞恩村
     描述：140000000
 */

var status = -1;

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(29924).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
