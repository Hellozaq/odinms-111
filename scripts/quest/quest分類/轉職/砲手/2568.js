/*
     名字：開始逃脫！
     地图：遇難者泥屋
     描述：3000200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.dispose();
                return;
            }
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            qm.sendAcceptDecline("現在只剩逃走的事了。來！馬上出發！");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(2568).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.getPlayer().changeMap(qm.getMap(912060200), qm.getMap(912060200).getPortal(0));
            qm.dispose();
    }
}
