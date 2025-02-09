/*
     名字：[十字猎人]偶然？必然！
     地图：维修中的列车
     描述：931050400
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
            qm.sendAcceptDecline("他們馬上就要發起攻擊了！不只是我，你也會陷入危險之中的。請擊退他們！");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1601).forceStart(qm.getPlayer(), qm.getNpc(), null);
            for (var i = 0; i < 8; i++)
                qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300470), new java.awt.Point(-510 + (Math.random() * 600), -5));
            qm.dispose();
    }
}
