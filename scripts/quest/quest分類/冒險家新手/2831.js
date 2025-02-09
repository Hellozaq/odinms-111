/*
     名字：義安的憤怒
     地图：勇士之村
     描述：102000000
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status < 1) {
                qm.sendOk("呵呵，或許應該過一會兒再用用？準備好的話，再來找我。");
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
            qm.sendAcceptDecline("好的，我也來試試#r強化的變身祕藥#k看一看？");
            break;
        case 1:
            qm.forceStartQuest();
            qm.gainItem(4033056, -1);
            for (var i = 0; i < 10; i++)
                qm.getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(100004), new java.awt.Point(2175, 1262));
            qm.dispose();
    }
}
