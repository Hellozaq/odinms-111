/*
     名字：黑暗契約者
     地图：黑暗契約者
     描述：燈泡
 */

var status = -1;

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(29959).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
