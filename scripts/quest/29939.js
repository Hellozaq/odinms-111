/*
     名字：龍之主
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(29939).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
