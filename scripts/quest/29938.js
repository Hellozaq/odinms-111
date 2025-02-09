/*
     名字：龍之主
     地图：寶貝龍
     描述：寶貝龍
 */

var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().getLevel() >= 10 && ((qm.getPlayer().getJob() / 100) | 0) == 22) {
        if (qm.canHold(1142156, 1) && !qm.getPlayer().itemQuantity(1142156)) {
            qm.gainItem(1142156, 1);
        }
        Packages.server.quest.MapleQuest.getInstance(29938).forceStart(qm.getPlayer(), qm.getNpc(), null);
        Packages.server.quest.MapleQuest.getInstance(29938).forceComplete(qm.getPlayer(), qm.getNpc());
    }
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}
