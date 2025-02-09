/*
     名字：[十字獵人]前往遺跡發掘現場！
     地图：遺跡發掘隊營區
     描述：102040200
 */

var status = -1;

function start(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            if (status > 0) {
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
            qm.sendNext("近來由於出沒在遺蹟挖掘地的骷髏們不斷地展開，所以死傷者持續攀升當中，正等待著勇者們來進行挑戰。");
            break;
        case 1:
            qm.sendAcceptDecline("詳細情況請去詢問遺跡發掘隊營區的發掘隊長#b杉峰#k。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1603).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
