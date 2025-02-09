/*
     名字：狩獵殭屍
     地图：冰原雪域
     描述：211000000
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
            qm.sendNext("優納米斯？我認識，一個皇家騎士團的騎士，他之前經常有在這附近出現。");
            break;
        case 1:
            qm.sendAcceptDecline("我最後一次見到優納米斯時，他在亡者之林Ⅰ區域#b狩獵殭屍#k。你應該親自去看看，是否能找到可能會發現他行跡的線索。");
            break;
        case 2:
            Packages.server.quest.MapleQuest.getInstance(20401).forceStart(qm.getPlayer(), qm.getNpc(), null);
            qm.dispose();
    }
}
