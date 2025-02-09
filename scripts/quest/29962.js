/*
     名字：復仇的化身
     地图：復仇的化身
     描述：燈泡
 */

var status = -1;

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(29962).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
