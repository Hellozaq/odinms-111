/*
     名字：克里塞的拯救者
     地图：克里塞村
     描述：200100010
 */

var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().itemQuantity(1142259) && qm.getPlayer().getLevel() >= 10) {
        Packages.server.quest.MapleQuest.getInstance(29948).forceStart(qm.getPlayer(), qm.getNpc(), null);
        Packages.server.quest.MapleQuest.getInstance(29948).forceComplete(qm.getPlayer(), qm.getNpc());
    }
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
