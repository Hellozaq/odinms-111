/*
     名字：[十字獵人]新的裂縫
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
            if (status == 1) {
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
            if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(1639)).getStatus() < 1) {
                Packages.server.quest.MapleQuest.getInstance(1639).forceStart(qm.getPlayer(), qm.getNpc(), null);
                qm.dispose();
                return;
            }
            qm.sendNext("邏輯似乎慢慢的連接起來了，在時間神殿中出現的阿卡伊農，還有時間裂縫……在同一時期出現的時空門……這一切之間好像存在著某種聯系，阿卡伊農的目的到底是什麼呢……我有一種不祥的預感。");
            break;
        case 1:
            qm.sendYesNo("我們必須前往#b#m270000000##k，查看裂縫的情況。");
            break;
        case 2:
            qm.sendNext("希望在哪裡可以調查出事情的真相。");
            break;
        case 3:
            Packages.server.quest.MapleQuest.getInstance(1639).forceComplete(qm.getPlayer(), qm.getNpc());
            qm.getPlayer().changeMap(qm.getMap(270000000), qm.getMap(270000000).getPortal(2));
            qm.dispose();
    }
}
