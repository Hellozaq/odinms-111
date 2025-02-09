/*
     名字：[十字獵人]桃花仙境的十字獵人
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1624)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1624).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("你好！還記得我嗎？我們在天空之城有見過面的，你不會把我忘了吧？");
            break;
        case 1:
            Packages.server.quest.MapleQuest.getInstance(1624).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.gainExp(13000);
            qm.dispose();
    }
}
