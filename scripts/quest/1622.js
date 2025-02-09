/*
     名字：[十字獵人]沙漠的十字獵人
     地图：補給品倉庫
     描述：931050500
 */

var status = -1;

function end(mode, type, selection) {
    switch (mode) {
        case -1:
            qm.dispose();
            return;
        case 0:
            status--;
            break;
        case 1:
            status++;
            break;
    }
    switch (status) {
        case 0:
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1622)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1622).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("沒想到會是你？小毛孩！你竟然通過了凱雷特的測試。");
            break;
        case 1:
            qm.sendPrev("唉！！儘管有點麻煩，但還是可以一個人完成的。我可不是那種喜歡和別人一起做事的類型啊。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(1622).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(12000);
            qm.dispose();
    }
}
