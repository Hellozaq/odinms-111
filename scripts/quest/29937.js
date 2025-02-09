/*
     名字：秘密團體臨時成員
     地图：通天塔&amp;lt;秘密房间&gt
     描述：200080601
 */

var status = -1;

function start(mode, type, selection) {
    Packages.server.quest.MapleQuest.getInstance(29937).forceComplete(qm.getPlayer(), qm.getNpc());
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
